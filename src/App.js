import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import SignUp from "./components/SignUp";
import { BrowserRouter,Switch,Route  } from "react-router-dom";
import NavbarTop from "./containers/NavbarTop";
import BeerList from "./components/BeerList";
import Login from "./components/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarTop/>
                <Switch>
                    <Route exact path="/" component={BeerList}/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
