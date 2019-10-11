import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

function Hero(props) {
    return (
        <Jumbotron className="bg-dark jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md="8" sm="12">
                        {props.title && (
                            <h1 className="display-1 font-weight-bolder text-white">
                                {props.title}
                            </h1>
                        )}
                        {props.subtitle && (
                            <h3 className="display-4 font-weight-light text-light">
                                {props.subtitle}
                            </h3>
                        )}
                        {props.text && (
                            <h3 className="lead font-weight-light text-light">
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
