import React from "react";
import Content from "../../components/Content";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
    return (
        <div>
            <Content>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="fullName">Username</Form.Label>
                        <Form.Control id="fullName" name="name" type="text" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="Email">Password</Form.Label>
                        <Form.Control id="email" name="email" type="email" />
                    </Form.Group>

                    <Button
                        className="d-inline-block"
                        variant="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
            </Content>
        </div>
    );
}

export default LoginPage;
