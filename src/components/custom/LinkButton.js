import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    Link 
} from 'react-router-dom';

class LinkButton extends Component {
    render() {
        return (
                <Button variant={this.variant}>
                    <p>{this.props.children}</p>
                    <FontAwesomeIcon icon={this.props.icon} />
                </Button>
        );
    }
}

export default LinkButton;