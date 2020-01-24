import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function NavbarHome() {
    return (
        <Navbar className="pt-5 navnav" variant="dark">
            <Nav className="mr-auto">
                <NavLink className="pr-2" to="/">Home</NavLink>
                <NavLink className="pr-2" to="/portfolio">Portfolio</NavLink>
                <NavLink className="pr-2" to="/pricing">Pricing</NavLink>
                <NavLink className="pr-2" to="/contact">Contact</NavLink>
                <NavLink className="pr-2" to="/resources">Resources</NavLink>
            </Nav>
        </Navbar>
    );
}

export default NavbarHome
