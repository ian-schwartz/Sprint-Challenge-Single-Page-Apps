import React, { useEffect, useState } from "react";
import axios from "axios";
import { statement } from "@babel/template";
import jssPluginPropsSort from "jss-plugin-props-sort";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const characterData = response.data.results;
      console.log("this is the data", characterData)
      setCharacter(characterData);
    })
    .catch(error => {
      console.log("This is an error", error);
    });

  }, []);


  return (
  
    // <SearchForm characters={characters} />
    <section className="character-list">
    {character.map(item => (
        <h2>
        {item.name}
        </h2>
      ))}
    </section>
  );
}
