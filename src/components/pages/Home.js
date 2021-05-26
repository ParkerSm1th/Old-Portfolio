import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LinkButton from '../custom/LinkButton';

import {
    Link
} from 'react-router-dom';

import Parker from '../../assets/images/parker.jpg';

class Home extends Component {

    componentDidMount() {
        document.getElementById('footer').style.position = 'fixed';
        document.getElementById('page').style.overflowY = 'hidden';
        document.getElementById('root').style.overflowY = 'hidden';
    }

    componentWillUnmount() {
        document.getElementById('page').style.overflowY = 'unset';
        document.getElementById('root').style.overflowY = 'unset';
    }


    render() {
        return (
            <DocumentTitle className="page" title='Parker Smith - Home'>
            <div className="page home" id="page">
                <div className="homePage">
                    <Container>
                        <Row>
                            <Col>
                                <img alt="Parker" src={Parker} />
                            </Col>
                            <Col>
                                <div className="text">
                                    <h1>Hi, I'm Parker.</h1>
                                    <p>I am a Web, Bot, & Java Developer</p>
                                    <Link to="/about"><LinkButton link="/about" variant="primary" icon={['fas', 'arrow-right']}>About Me</LinkButton></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </DocumentTitle>
        );
    };
}

export default Home;