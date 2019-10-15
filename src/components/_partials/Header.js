import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <Navbar className="bg-dark" expand="lg">
            {/* Brancd Navbar */}
            <Navbar.Brand className="text-light font-weight-light font-montserrat">
                My Portofolio
            </Navbar.Brand>

            {/* Menu Navbar */}
            <Navbar.Toggle
                className="border-0 bg-light"
                aria-controls="navbar-toggle"
            />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link
                        className="nav-link text-light font-montserrat"
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="nav-link text-light font-montserrat"
                        to="/about"
                    >
                        About Me
                    </Link>
                    <Link
                        className="nav-link text-light font-montserrat"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
