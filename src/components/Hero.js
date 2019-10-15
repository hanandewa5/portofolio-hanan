import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
    return (
        <Jumbotron className="bg-dark jumbotron-fluid p-0" style={styles.container}>
            <Container fluid={true} style={styles.head}>
                <Row className="justify-content-center py-5">
                    <Col md="8" sm="12">
                        {props.title && (
                            <h1 className="font-weight-bolder text-white g-title">
                                {props.title}
                            </h1>
                        )}
                        {props.subtitle && (
                            <h3 className="font-weight-light text-light g-subtitle">
                                {props.subtitle}
                            </h3>
                        )}
                        {props.text && (
                            <Row className="justify-content-center">
                                <h3 className="font-weight-light text-light g-text">
                                    {props.text}
                                </h3>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

const bgImage = "/assets/images/bg-tron.jpeg";

const styles = {
    container: {
        backgroundImage: `url(${bgImage})`
    },
    head: {
        paddingTop: 20
    }
};

export default Hero;
