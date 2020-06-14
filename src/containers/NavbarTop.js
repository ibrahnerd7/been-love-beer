import React from 'react'
import {Navbar} from 'react-bulma-components';

const NavbarTop=()=>{
    return(
<Navbar
        color='primary'
        fixed='top'
        active={false}
        transparent={false}
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <h1>Been Love Beer</h1>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
         
          <Navbar.Container position="end">
            <Navbar.Item href="#" >
                  Home 
            </Navbar.Item>
            <Navbar.Item href="#">
                  Favourites 
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
}

export default NavbarTop