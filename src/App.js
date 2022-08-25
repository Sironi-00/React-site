import { useState } from "react";
import "./App.css";

var SELECTEDCATEGORY = "*";

export default function App() {
  const db = [
    {
      name: "google",
      link: "www.google.com",
      description: "The One Search Engine",
      category: "search-engine",
      votes: 0,
    },
    {
      name: "youtube",
      link: "www.youtube.com",
      description: "The One Video Hub",
      category: "video-engine",
      votes: 0,
    },
    {
      name: "GitHub",
      link: "www.google.com",
      description: "The One Search Engine",
      category: "search-engine",
      votes: 0,
    },
    {
      name: "FreeCodeCamp",
      link: "www.youtube.com",
      description: "The One Video Hub",
      category: "video-engine",
      votes: 0,
    },
    {
      name: "SoloLearn",
      link: "www.google.com",
      description: "The One Search Engine",
      category: "search-engine",
      votes: 0,
    },
  ];
  
  
  const [dblist, setSite] = useState(db);
  
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
  const [genries, _setGenre] = useState(makeGenre(dblist));

  function handleChange(e) {
    setSite()
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th id="cate">
              <select name="category" id="category">
                {/* // display filterd category options */}
                <option value="*">Category</option>
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
  return props.map((el) => {
    if (SELECTEDCATEGORY === el.category || SELECTEDCATEGORY === "*") {
      return (
        <tr key={el.name}>
          <td>{el.category}</td>
          <td>
            <a href={el.link}>{el.name}</a>
          </td>
          <td>{el.description}</td>
          <td>{el.votes}</td>
          <td><button>UP</button></td>
          <td><button>Down</button></td>
        </tr>
      );
    } else return <p> The Category doesn't match or the list is empty </p>
  });
}
