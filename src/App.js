import { useState } from "react";
import "./App.css";

var SELECTEDCATEGORY = "*";

export default function App() {
  const db = [
    {
      name: "google",
      link: "http://www.google.com",
      description: "The One Search Engine",
      category: "Google",
      votes: 0,
    },
    {
      name: "youtube",
      link: "http://www.youtube.com",
      description: "The One Video Hub",
      category: "Google",
      votes: 0,
    },
    {
      name: "GitHub",
      link: "http://www.google.com",
      description: "The One Search Engine",
      category: "Programming",
      votes: 0,
    },
    {
      name: "FreeCodeCamp",
      link: "http://www.youtube.com",
      description: "The One Video Hub",
      category: "Programming",
      votes: 0,
    },
    {
      name: "SoloLearn",
      link: "http://www.google.com",
      description: "The One Search Engine",
      category: "Programming",
      votes: 0,
    },
    {
      name: "W3SChool",
      link: "http://www.w3schools.com",
      description: "The CS Dictionary",
      category: "Programming",
      votes: 0,
    },
    {
      name: "Vscode+",
      link: "http://code.visualstudio.com/",
      description: "VScode",
      category: "Programming",
      votes: 0,
    },
    {
      name: "Reddit",
      link: "http://www.reddit.com",
      description: "Reddit",
      category: "Social",
      votes: 0,
    },
    {
      name: "FaceBook",
      link: "http://www.facebook.com",
      description: "Reddit",
      category: "The one Social platform",
      votes: 0,
    },
  ];
  
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
          <Tray props={dblist} />
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

function Tray({ props }) {
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
          <td><button>UP</button></td>
          <td><button>Down</button></td>
        </tr>
      );
  });
}
