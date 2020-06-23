import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import SignUp from "./components/SignUp";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavbarTop from "./containers/NavbarTop";
import BeerList from "./components/BeerList";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    const user = null
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarTop user={user}/>
                <Switch>
                    <Route exact path="/" component={BeerList}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    {user && <Route path="/profile" component={Profile}/>}

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
