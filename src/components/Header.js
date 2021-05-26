import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col xs={6} lg={4}>
                            <NavLink to="/"><div className="logo"><img alt="P Logo" src={Logo} /><h1>Parker Smith</h1></div></NavLink>
                        </Col>
                        <Col xs={6} lg={4}>
                            <ul className="navb">
                                <li>
                                    <NavLink to="/about"><p>About</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/portfolio"><p>Portfolio</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pricing"><p>Pricing</p></NavLink>
                                </li>
                            </ul>
                            <div className="ham">
                                <FontAwesomeIcon icon={['fas', 'bars']} />
                            </div>
                        </Col>
                        <Col>
                            <ul className="navb2">
                                <li><NavLink to="/contact"><p>Contact</p></NavLink></li>
                            </ul>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;