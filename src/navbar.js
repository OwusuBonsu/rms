import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import React from 'react';
import './navbar.css'

function NavigationBar() {
        return (
            <Navbar bg="light" sticky="top">
                <Navbar.Brand href="#index" className="nav-tex">RateMyStylist</Navbar.Brand>
                <Button variant="login" className="loginn">Login</Button>{' '}
            </Navbar>
        )
    }

export default NavigationBar;