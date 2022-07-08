import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../img/LogoJMSISTEMS.png'
import './NavBar.css'
import { Navbar, Nav } from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to={"/"} className="navbar-brand">
                    <img src={Logo} alt="logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/Consola" className="nav-link">
                            Consolas
                        </NavLink>
                        <NavLink to="/Videojuegos" className="nav-link">
                            Videojuegos
                        </NavLink>
                        <NavLink to="/Accesorios" className="nav-link">
                            Accesorios
                        </NavLink>
                        <NavLink to="/Controles" className="nav-link">
                            Controles
                        </NavLink>
                    </Nav>

                    <Link to='/cart'>
                        <CardWidget />
                    </Link>
                </Navbar.Collapse>
            </div>
        </Navbar>


    )
}

export default NavBar