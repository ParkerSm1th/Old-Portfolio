import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const FooterText = ({ flags }) => {
  if (flags.footerText) {
    return <Row>
            <Col>
                <ul className="footerSocial">
                    <li><a target="_blank" href="https://twitter.com/ParkerSm1th"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                    <li><a target="_blank" href="https://instagram.com/ParkerSm1th"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                    <li><a target="_blank" href="https://github.com/ParkerSm1th"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/parker-smith-14172613a/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li className="copyright"><p>&copy; Copyright Parker, 2021</p></li>
                </ul>
            </Col>
            <Col>
            {flags.footerTextV ? <div><NavLink to="/tos"><h1 className="footerLink">TOS</h1></NavLink> </div> : <div></div>}
            </Col>
        </Row>;
  } else {
    return <div></div>;
  }
};

export default withLDConsumer()(FooterText);