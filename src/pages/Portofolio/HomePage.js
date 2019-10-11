import React from 'react';
import Hero from '../../components/Hero';
import Corousel from '../../components/Carousel';

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Corousel />
        </div>
    );
}

export default HomePage;