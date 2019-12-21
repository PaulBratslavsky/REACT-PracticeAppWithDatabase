import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillFire } from "react-icons/ai";

import { Link } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <Navbar style={{background: '#0d0c22'}} sticky="top" collapseOnSelect expand="lg"  variant="dark">
            <Link to="/" className="navbar-brand"><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><AiFillFire /><span style={{marginLeft: '0.25rem'}} >JITS</span></div></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/new"><Nav.Link>News</Nav.Link></LinkContainer>
                    <LinkContainer to="/videos"><Nav.Link>Videos</Nav.Link></LinkContainer>
                </Nav>

                 <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;

