import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header(props) {
    const [trigger, setTrigger] = useState(0);

    const handleScroll = useCallback(() => {
        const { innerWidth } = window;

        if (innerWidth > 600) {
            let lastScrollY = parseFloat(window.scrollY / 300);
            setTrigger(lastScrollY);
        } else {
            setTrigger(1);
        }
    },[]);

    useEffect(() => {
        const { innerWidth } = window;

        if(innerWidth > 600){
            window.addEventListener("scroll", handleScroll);
        } else {
            console.log('a');
            setTrigger(1);
        }
    },[handleScroll]);

    return (
        <Navbar
            style={{ backgroundColor: `rgba(52,58,64,${trigger})` }}
            expand="sm"
            fixed="top"
        >
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
