import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavbarTop from "./containers/NavbarTop";
import BeerList from "./components/BeerList";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import  {UserContext} from "./providers/UserProvider";
import React, {useContext} from "react";

const Application = () => {
    const user=useContext(UserContext)
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarTop />
                <Switch>
                    <Route exact path="/" component={BeerList}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/favourites" component={Profile} />
                    {user && <Route path="/profile" component={Profile}/>}
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Application