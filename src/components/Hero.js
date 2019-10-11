import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
    return (
        <Jumbotron className="bg-dark jumbotron-fluid p-0">
            <Container fluid={true}>
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
                            <h3 className="g-text font-weight-light text-light">
                                {props.text}
                            </h3>
                        )}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

// const bgImage = "/assets/images/bg-tron.jpeg";

// const styles = {
//     container: {
//         backgroundImage: `url(${bgImage})`
//     }
// };

export default Hero;
