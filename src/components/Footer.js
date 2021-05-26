import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import FooterText from './FooterText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
    
    render() {
        const year = new Date().getFullYear();
        return (
            <div className="footer" id="footer">
                <Container>
                  <FooterText />
                </Container>
            </div>
        );
    }
}

export default Footer;