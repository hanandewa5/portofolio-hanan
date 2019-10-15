import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/_partials/Footer";
import Header from "./components/_partials/Header";
import Routes from './_routes/Routes';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerLink: [
                { title: "Home", path: "/" },
                { title: "About", path: "/about" },
                { title: "Contact", path: "/contact" }
            ],
            home: {
                title: "Hananto Eko Saputro",
                subtitle: "Web Developer | Mobile Hybrid Developer | Full Stack Developer",
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
                    <Header />
                    <Routes />


                    <Footer />
                </Container>
            </Router>
        );
    }
}

export default App;
