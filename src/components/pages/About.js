import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';

import Parker from '../../assets/images/parker.jpg';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


class About extends Component {

    state = { width: 0, height: 0 };
    updateWindowDimensions = this.updateWindowDimensions.bind(this);

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        const height = document.getElementById('page').clientHeight + 200;
        console.log('H: ' + height);
        console.log('SH: ' + this.state.height);
        if (height > this.state.height) {
            if ((height - this.state.height) < 25) {
                document.getElementById('footer').style.position = 'fixed';
            } else {
                document.getElementById('footer').style.position = 'unset';
            }
        } else {
            document.getElementById('footer').style.position = 'fixed';
        }
    }

    render() {
        return (
            <DocumentTitle title='Parker Smith - About'>
            <div className="page" id="page">
                    <Container>
                        <div className="pageTitle img">
                            <img alt="Parker" src={Parker} /> 
                            <h1>A little about <span className="emphasis">me</span></h1> 
                        </div>
                        <Row>
                            <Col xs={12} md={8}>
                                <div className="aboutText">
                                    <p><span>I'm Parker Smith, a student athlete in the Bay Area who has also lived in Amsterdam, NL & Dallas, TX. I have a passion for Development and have been doing development since the day I got my first laptop that could open an IDE. I started out with Web Development but that quickly made me start to wonder what else I could do so I started learning Java which is how I got started with Minecraft Development before I ended up moving on to Discord Bots which lead me to NodeJS. I've since been dedicated to learning everything I can about how I can connect all of these different platforms and have made</span> <Link to="/portfolio"><span>some things I'm super proud of</span></Link><span>.
                                    <br />
                                    <br />
                                    I currently am a Freelance Developer who does Development alongside my other passions such as Football and Lacrosse. I take commissions based on my availablity, as much I'd like to take every commission I am a high school student :). I currently am accepting Web Development, Web Design, Bot Development, Java Plugins, & Admin Panel commissions. I also love to hear from new people so even if you aren't looking for a developer feel free to </span> <Link to="/contact"><span>contact me</span></Link><span>.</span>
                                    <br />
                                    <br />
                                    </p>

                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <ul className="skills">
                                    <h1>A few of my skills</h1>
                                    {[
                                        'Java',
                                        'Javascript',
                                        'PHP',
                                        'Python',
                                        'C',
                                        'SQL',
                                        'CSS3',
                                        'HTML5',
                                        ].map((variant, idx) => (
                                            <li>
                                                <div className="skill">
                                                    <p>{variant}</p>
                                                </div>
                                            </li>
                                    ))}
                                    {[
                                        'React',
                                        'NodeJS',
                                        'Express',
                                        'Angular',
                                        ].map((variant, idx) => (
                                            <li>
                                                <div className="skill framework">
                                                    <p>{variant}</p>
                                                </div>
                                            </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
            </div>
            </DocumentTitle>
        );
    };
}

export default About;