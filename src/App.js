import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route, Link } from "react-router-dom";


export default function App() {
  return (
    <main>
      {/* <SearchForm /> */}
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link> 
      <Header />
      <Route exact path="/" component={WelcomePage} />
      {/* <CharacterList /> */}
      <Route path="/characters" component={CharacterList} />
      
    </main>
  );
}
