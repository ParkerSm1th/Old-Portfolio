import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import { Container } from 'react-bootstrap';


class NotFound extends Component {

    state = {
        width: window.innerWidth,
    };
    
    componentDidMount () {
        this.timeoutID = setTimeout(() => {
            console.log(this.props.history);
            this.props.history.push('/');
        }, 4000);
        document.getElementById('footer').style.position = 'fixed';
    }


    componentWillUnmount () {
        clearTimeout(this.timeoutID);
    }


    render() {
        return (
            <div className="nfpage">
            <DocumentTitle title='Parker Smith - Page not found'>
            </DocumentTitle>
            <Container>
                <div className="pageTitle">
                    <h1>Whoops!</h1>
                    <p>Sorry! That page could not be found.. Redirecting you...</p>
                </div>
            </Container>
            </div>
            
        );
    };
}

export default NotFound;