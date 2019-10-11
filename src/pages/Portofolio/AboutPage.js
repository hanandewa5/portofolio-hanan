import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Content>
                <p>This site is still building</p>
            </Content>
        </div>
    );
}

export default AboutPage;