import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React from 'react';
import './navbar.css'

function NavigationBar() {
        return (
            <Navbar bg="dark" sticky="top" className="navBack" variant="dark">
                <Navbar.Brand href="#index" className="nav-text">RateMyStylist</Navbar.Brand>
            </Navbar>
        )
    }

export default NavigationBar;