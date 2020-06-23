import React, {useState} from 'react';
import {Navbar} from 'react-bulma-components/lib';

function NavbarTop({user}) {
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
                    {user && <Navbar.Item href="/profile">
                        Profile
                    </Navbar.Item>}

                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarTop;
