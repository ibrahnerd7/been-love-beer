import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavbarTop from "./containers/NavbarTop";
import BeerList from "./components/BeerList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserProvider, {UserContext} from "./providers/UserProvider";
import React, {useContext} from "react";

const Application = () => {
    const user=useContext(UserContext)
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
    )
}

export default Application