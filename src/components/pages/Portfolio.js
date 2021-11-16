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

import PortfolioItems from '../custom/PortfolioItems';

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
                        <PortfolioItems />
                    </Container>
            </div>
            </DocumentTitle>
        );
    };
}

export default Portfolio;