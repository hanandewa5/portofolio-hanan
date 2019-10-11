import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Footer from "./components/Footer";

// ? Admin
import LoginPage from "./pages/Admin/LoginPage"

// ? Portofolio
import HomePage from "./pages/Portofolio/HomePage";
import AboutPage from "./pages/Portofolio/AboutPage";
import ContactPage from "./pages/Portofolio/ContactPage";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "My Portofolio",
            headerLink: [
                { title: "Home", path: "/" },
                { title: "About", path: "/about" },
                { title: "Contact", path: "/contact" }
            ],
            home: {
                title: "Hananto Eko Saputro",
                subtitle: "Web Developer | Mobile Hybrid Debeloper | Full Stack Developer",
                text: "Let's see what i have done"
            },
            about: {
                title: "About Me",
                subtitle: "Se my profile",
                text: ""
            },
            contact: {
                title: "Let's Talk",
                subtitle: "Lets dive",
                text: "You can meet me in here"
            }
        };
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="bg-dark" expand="lg">
                        {/* Brancd Navbar */}
                        <Navbar.Brand className="text-light font-weight-light">
                            {this.state.title}
                        </Navbar.Brand>

                        {/* Menu Navbar */}
                        <Navbar.Toggle
                            className="border-0 bg-light"
                            aria-controls="navbar-toggle"
                        />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link text-light" to="/">
                                    Home
                                </Link>
                                <Link
                                    className="nav-link text-light"
                                    to="/about"
                                >
                                    About Me
                                </Link>
                                <Link
                                    className="nav-link text-light"
                                    to="/contact"
                                >
                                    Contact
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route
                        path="/"
                        exact
                        render={() => (
                            <HomePage
                                title={this.state.home.title}
                                subtitle={this.state.home.subtitle}
                                text={this.state.home.text}
                            />
                        )}
                    />
                    <Route
                        path="/about"
                        exact
                        render={() => (
                            <AboutPage
                                title={this.state.about.title}
                                subtitle={this.state.about.subtitle}
                                text={this.state.about.text}
                            />
                        )}
                    />
                    <Route
                        path="/contact"
                        exact
                        render={() => (
                            <ContactPage
                                title={this.state.contact.title}
                                subtitle={this.state.contact.subtitle}
                                text={this.state.contact.text}
                            />
                        )}
                    />
                    <Route
                        path="/login"
                        exact
                        render={() => (
                            <LoginPage />
                        )}
                    />

                    <Footer />
                </Container>
            </Router>
        );
    }
}

export default App;
