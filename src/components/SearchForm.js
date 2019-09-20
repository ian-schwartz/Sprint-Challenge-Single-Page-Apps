import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm(props) {
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.characters.filter(character =>
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
        <input id="name" type="text" name="textfield" placeholder="Search" onChange={handleChange}></input>
     </form>
    </section>
  );
}
