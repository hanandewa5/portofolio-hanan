import React from "react";
import { Route } from "react-router-dom";

import LoginPage from "../pages/Admin/LoginPage";
import HomePage from "../pages/Portofolio/HomePage";
import AboutPage from "../pages/Portofolio/AboutPage";
import ContactPage from "../pages/Portofolio/ContactPage";

const data = {
    home: {
        title: "Hananto Eko Saputro",
        subtitle:
            "Web Developer | Mobile Hybrid Developer | Full Stack Developer",
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

export default function Routes() {
    return (
        <div>
            <Route
                path="/"
                exact
                render={() => (
                    <HomePage
                        title={data.home.title}
                        subtitle={data.home.subtitle}
                        text={data.home.text}
                    />
                )}
            />
            <Route
                path="/about"
                exact
                render={() => (
                    <AboutPage
                        title={data.about.title}
                        subtitle={data.about.subtitle}
                        text={data.about.text}
                    />
                )}
            />
            <Route
                path="/contact"
                exact
                render={() => (
                    <ContactPage
                        title={data.contact.title}
                        subtitle={data.contact.subtitle}
                        text={data.contact.text}
                    />
                )}
            />
            <Route path="/login" exact render={() => <LoginPage />} />
        </div>
    );
}
