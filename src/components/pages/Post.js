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

import BlogPost from '../custom/BlogPost';




class Post extends Component {

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
            <DocumentTitle title='Parker Smith - Blog'>
            <div className="page" id="page">
                    <Container>
                            <BlogPost slug={this.props.slug}/>
                    </Container>
            </div>
            </DocumentTitle>
        );
    };
}

export default Post;