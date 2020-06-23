import React, {useContext, useState} from 'react';
import {Navbar} from 'react-bulma-components/lib';
import Image from "react-bulma-components/lib/components/image";
import {UserContext} from "../providers/UserProvider";
import {authentication} from "../firebase/config";


function NavbarTop() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const user = useContext(UserContext)
    return (
        <Navbar
            color="primary"
            fixed="top"
            active={isCollapsed}
            transparent={false}
            style={{marginBottom: 16}}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="/">
                    <h1>Been Love Beer</h1>
                </Navbar.Item>
                <Navbar.Burger onClick={() => setIsCollapsed(!isCollapsed)}/>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container position="end">
                    {!user && <Navbar.Item href="/signup">
                        SignUp
                    </Navbar.Item>}
                    {!user &&
                    <Navbar.Item href="/login">
                        Login
                    </Navbar.Item>
                    }
                    <div>
                        {user && <Image
                            rounded
                            style={{marginTop: 12}}
                            src={user.photoURL}
                            size={32}
                            alt="user image"/>}
                    </div>
                    {user && <Navbar.Item href="/profile">
                        {user.displayName}
                    </Navbar.Item>}
                    {user &&
                    <Navbar.Item
                        onClick={() => console.log("signed out")}
                        href="/favourites">
                        Favourites
                    </Navbar.Item>}
                    {user &&
                    <Navbar.Item
                        onClick={async () => await authentication.signOut().then(() => console.log("signed out"))}
                        href="/">
                        Sign Out
                    </Navbar.Item>}


                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarTop;
