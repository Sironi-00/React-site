import { useState } from "react";
import "./App.css";
import { db } from "./Data.js";

var SELECTEDCATEGORY = "*";

export default function App() {
  function makeGenre(list) {
    // filters and make category list
    // make a set to contain genries with no duplicates
    let genreList = new Set();

    list.forEach((el) => {
      genreList.add(el.category);
    });

    // Turn the set to a list
    genreList = [...genreList]
    
    return genreList
  }
  
  function categoryList(list) {
    let filteredList = []
    list.forEach(el=>{
        if (SELECTEDCATEGORY === el.category || SELECTEDCATEGORY === "*") filteredList.push(el)
    })
    return filteredList
  }

  const [dblist, setSite] = useState(categoryList(db));
  const [genries, _setGenre] = useState(makeGenre(dblist));

  function handleChange(e) {
    SELECTEDCATEGORY =  e.target.value
    setSite(categoryList(db))
  }
  const handleVote =(votes)=> {
    // Handle Upvote
    // get element by id 
    dblist.forEach(el=>{
      if (el.name==e.name) el.votes++;
    })
    console.log("Feature Coming soon")
    
  }
  
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th id="cate">
              <select name="category" id="category">
                {/* // display filterd category options */}
                <option value="*" onClick={handleChange}>All</option>
                <SelectCate props={genries} handleChange={handleChange}/>
              </select>
            </th>
            <th id="name">Name</th>
            <th id="desc">Description</th>
            <th id="vote">Votes</th>
          </tr>
        </thead>
        <tbody>
          <Tray props={dblist} handleVote={handleVote} />
        </tbody>
      </table>
    </main>
  );
}

function SelectCate({ props, handleChange }) {
  // Display categories as options and the logic
  return props.map((category) => {
    return <option key={category} value={category} onClick={handleChange}>{category}</option>;
  });
}

function Tray({ props, handleVote }) {
  // Adds and display site to the table
  return props.map(({name, category, link, votes, description}) => {
      return (
        <tr key={name}>
          <td>{category}</td>
          <td>
            <a href={link} target="_">{name}</a>
          </td>
          <td>{description}</td>
          <td>{votes}</td>
          <td className="btv" value="Press" onClick={()=>{handleVote(votes)}}><button>UP</button></td>
          <td className="btv"><button>Down</button></td>
        </tr>
      );
  });
}
