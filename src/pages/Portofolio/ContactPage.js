import React from "react";
import Hero from "../../components/Hero";
import Content from "../../components/Content";
import { Form, Button } from "react-bootstrap";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            emailSent : null,
        };
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="fullName">
                                Full Name
                            </Form.Label>
                            <Form.Control
                                id="fullName"
                                name="name"
                                type="text"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="Email">Email</Form.Label>
                            <Form.Control
                                id="email"
                                name="email"
                                type="email"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control
                                id="message"
                                name="message"
                                as="textarea"
                                rows="5"
                            />
                        </Form.Group>

                        <Button
                            className="d-inline-block"
                            variant="primary"
                            type="submit"
                            disabled={this.state.disabled}
                        >
                            Send
                        </Button>
                        {this.state.emailSent === true &&  <p>Email Sent</p>}
                        {this.state.emailSent === false &&  <p>Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default ContactPage;
