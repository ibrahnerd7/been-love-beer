import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import SignUp from "./components/SignUp";
import { BrowserRouter  } from "react-router-dom";
import NavbarTop from "./containers/NavbarTop";
import BeerList from "./components/BeerList";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarTop/>
                <Switch>
                    <Route exact path="/" component={BeerList}/>
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
