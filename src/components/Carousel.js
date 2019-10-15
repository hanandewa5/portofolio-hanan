import React from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import { portofolioService } from "../_services";

class Corousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {id : 1},
                {id : 2},
                {id : 3},
                {id : 4},
            ]
        };
    }

    componentDidMount() {
        portofolioService.getPortofolio().then(data => {
            setTimeout(() => {
                this.setState({ items: data });
            }, 2000);
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
                    onClick={e => this.handleCardClick(item.id, e)} //disable sementara
                />
            );
        });
    };

    render() {
        return (
            <Container fluid={true}>
                <div className="g-wrap">
                    <Row className="g-carousel">
                        {this.makeItems(this.state.items)}
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Corousel;
