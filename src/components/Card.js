import React from "react";
import CardInfo from "./CardInfo";
import { configConstants } from "../_constants/config_constant";
import Shimmer from 'react-shimmer-effect';

function Card(props) {
    return (
        <div
            className="d-inline-block g-card"
            onClick={e => props.onClick(props.item)}
        >
            {props.item.imgSrc ? (
                <img
                    className="g-card-image"
                    src={configConstants.urlApi + props.item.imgSrc}
                    alt={props.item.imgSrc}
                />
            ) : (
                <Shimmer>
                    <div className="g-card-image-shimmer" />
                </Shimmer>
            )}
            <CardInfo
                title={props.item.title}
                projectType={props.item.projecttype}
                tool={props.item.tool}
                platform={props.item.platform}
                subtitle={props.item.subtitle}
                link={props.item.link}
            />
            {/* {props.item.selected && (
                <CardInfo
                    title={props.item.title}
                    projectType={props.item.projecttype}
                    tool={props.item.tool}
                    platform={props.item.platform}
                    subtitle={props.item.subtitle}
                    link={props.item.link}
                />
            )} */}
        </div>
    );
}

export default Card;
