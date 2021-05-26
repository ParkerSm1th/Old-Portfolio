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
import WarzoneRanks from '../../assets/images/warzoneRanks.png';
import Groupiz from '../../assets/images/groupiz.png';
import KeyFM from '../../assets/images/keyfm.png';
import KeyFMStaff from '../../assets/images/keyfm-staff.png';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


class Portfolio extends Component {

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
            <DocumentTitle title='Parker Smith - Portfolio'>
            <div className="page" id="page">
                    <Container>
                        <div className="pageTitle img">
                            <h1>My work</h1> 
                        </div>
                        <Row className="portfolioItems">
                            <Col xs={12} md={4}>
                                <div className="portfolioItem">
                                    <img src={WarzoneRanks}></img>
                                    <h1>Warzone Ranks <a href="https://warzoneranks.app" target="_blank"><span className="portfolioLink">View Site <i class="far fa-arrow-circle-right"></i></span></a></h1>
                                    <p>A site to rank warzone stats using <span className="skill framework">React</span> and <span className="skill framework">Express</span> to show how they stack up against other players.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="portfolioItem">
                                    <img src={Groupiz}></img>
                                    <h1>Groupiz <a href="https://grpiz.io" target="_blank"><span className="portfolioLink">View Site <i class="far fa-arrow-circle-right"></i></span></a></h1>
                                    <p>A site for groups to collaborate on projects together using <span className="skill framework">EJS</span> and <span className="skill framework">Express</span>. Made to help during the Pandemic and online school.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="portfolioItem">
                                    <img src={KeyFM}></img>
                                    <h1>KeyFM <a href="https://keyfm.net" target="_blank"><span className="portfolioLink">View Site <i class="far fa-arrow-circle-right"></i></span></a></h1>
                                    <p>KeyFM is an online radio station using <span className="skill framework">PHP</span> and <span className="skill framework">Express</span> to create a seamless listening experience.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="portfolioItem">
                                    <img src={KeyFMStaff}></img>
                                    <h1>KeyFM Staff <span className="portfolioLink disabled">Private <i class="far fa-lock"></i></span></h1>
                                    <p>KeyFM's staff panel which managed staff, timetable, third party encoders and more using <span className="skill framework">PHP</span> and <span className="skill framework">NodeJS</span>.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </div>
            </DocumentTitle>
        );
    };
}

export default Portfolio;