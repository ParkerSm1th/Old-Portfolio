import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';

import Parker from '../../assets/images/parker.jpg';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


class Contact extends Component {

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
            <DocumentTitle title='Parker Smith - Contact'>
            <div className="page" id="page">
                    <Container>
                        <div className="pageTitle img">
                            <h1>Let's get in touch</h1> 
                        </div>
                        <Row>
                            <Col xs={12} md={4}>
                                <ul className="skills">
                                    <h1>Contact Methods</h1>
                                    <li>
                                        <Button variant="primary" className="contact">
                                            <div className="contactIcon"><i className="fab fa-discord"></i></div>
                                            <p>Parker#5915</p>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="primary" className="contact">
                                            <div className="contactIcon"><i className="fal fa-at"></i></div>
                                            <p>me@parkersmith.io</p>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button variant="primary" className="contact">
                                            <div className="contactIcon"><i className="fab fa-twitter"></i></div>
                                            <p>@ParkerSm1th</p>
                                        </Button>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="aboutText">
                                    <h1 className="subtextSmall">So you're convinced enough to get in touch? I did my job!</h1>
                                        
                                    <p><span>Feel free to use any of the methods you see on this page to get in touch with me, whatever the reason may be, whether that is to start a new project or if it is simply just to get to know me, reach out! 
                                    <br />
                                    <br />
                                    I try to respond to all methods within 24 hrs after the time of contact.</span></p>

                                </div>
                            </Col>
                        </Row>
                    </Container>
            </div>
            </DocumentTitle>
        );
    };
}

export default Contact;