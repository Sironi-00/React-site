import { useEffect, useState } from "react";
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

  const [dblist, setItem] = useState(db);

  function handleCat(e) {
    SELECTEDCATEGORY = e.target.value
  }
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th id="cate">
              <select name="category" id="category" onChange={handleCat}>
                {/* // display filterd category options */}
                <option value="*">Category</option>
                <SelectCate props={dblist} />
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

function SelectCate({ props }) {
  // filters and make category options
  const histDict = [];

  props.forEach((el) => {
    if (!(el.category in histDict)) histDict.push({ category: el.category });
  });

  return histDict.map((el) => {
    return <option value={el.category}>{el.category}</option>;
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
          <button>UP</button>
          <button>Down</button>
        </tr>
      );
    } else return <p> The Category doesn't match or the list is empty </p>
  });
}
