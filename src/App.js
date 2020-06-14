import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import NavbarTop from "./containers/NavbarTop";
import Searchbar from "./components/Searchbar";
import BeerList from "./components/BeerList";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Searchbar />
      <BeerList />
    </div>
  );
}

export default App;
