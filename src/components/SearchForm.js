import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm(props) {
  console.log("props", props);
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.character.filter(character =>
      character.toLowerCase().includes(searchName)
    );
    setSearchResults(results);
  }, [searchName]);
  
  const handleChange = event => {

    setSearchName(event.target.value);
  };

  return (
    <section className="search-form">
     <form>
        <label for="name">Search</label>
        <input id="name" type="text" name="textfield" placeholder="Search" value={searchName} onChange={handleChange}></input>
     </form>
     <div>
       <ul>
         {searchResults.map(character => (
           <li>{character}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}
