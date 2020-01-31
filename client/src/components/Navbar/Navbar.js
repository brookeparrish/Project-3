import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavbarHome() {
    return (
        <Navbar className="pt-5 navnav" variant="dark">
            <Nav className="mr-auto">
                <NavLink className="pr-2" to="/">home</NavLink>
                <NavLink className="pr-2" to="/Registry">registry</NavLink>
                <NavLink className="pr-2" to="/Shop">shop</NavLink>
                <NavLink className="pr-2" to="/Find">find</NavLink>
                <NavLink className="pr-2" to="/CreateAccount">create registry</NavLink>
            </Nav>
        </Navbar>
    );
}

export default NavbarHome;
