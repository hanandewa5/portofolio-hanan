import React from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import { portofolioService } from "../_services";

class Corousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        portofolioService.getPortofolio().then(data => {
            this.setState({ items: data });
        });
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id - 1].selected = items[id - 1].selected ? false : true;

        items.forEach(item => {
            if (item.id === id) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
        this.setState({ items });
    };

    makeItems = items => {
        return items.map((item, key) => {
            return (
                <Card
                    key={key}
                    item={item}
                    onClick={e => this.handleCardClick(item.id, e)}
                />
            );
        });
    };

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Corousel;
