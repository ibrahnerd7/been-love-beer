import React, {useState} from 'react';
import {Navbar, Button} from 'react-bulma-components/lib';
import {NavLink} from "react-router-dom";

function NavbarTop() {
    const [isCollapsed, setIsCollapsed] = useState(false);
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
                    <Navbar.Item href="/signup">
                            SignUp
                    </Navbar.Item>
                    <Navbar.Item href="/login">
                            Login
                    </Navbar.Item>
                    <Navbar.Item href="/login">
                        Profile
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarTop;
