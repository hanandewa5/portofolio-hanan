import React from "react";
import CardInfo from "./CardInfo";
import { configConstants } from "../_constants/config_constant";

function Card(props) {
    return (
        <div
            className="d-inline-block g-card"
            onClick={e => props.onClick(props.item)}
        >
            <img
                className="g-card-image"
                src={configConstants.urlApi + props.item.imgSrc}
                alt={props.item.imgSrc}
            />
            {props.item.selected && (
                <CardInfo
                    title={props.item.title}
                    subtitle={props.item.subtitle}
                    link={props.item.link}
                />
            )}
        </div>
    );
}

export default Card;
