import React from 'react';
import { useSpring, animated,useChain } from 'react-spring';

function CardInfo(props) {
    const style = useSpring({opacity: 1, from :{opacity : 0}});

    return(
        <animated.div className="g-card-info" style={style} >
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-subtitle">{props.projectType}</p>
            <p className="g-card-tool">{props.tool}</p>
            <p className="g-card-platform">{props.platform}</p>
            <p className="g-card-subtitle">{props.subtitle}</p>
            {/* <a href={props.link} target="_blank" rel="noopener noreferrer">View</a> */}
        </animated.div>
    );
}

export default CardInfo;