import React from 'react';
import {apiStates, useApi} from './useAPI'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';

const BlogPosts = () => {
  const { state, error, data } = useApi('https://api.grpiz.io/portfolio/blog');

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
        <Row className="portfolioItems">
            {data.items.map((post) => (
                <Col xs={12} md={4}>
                    <div className="portfolioItem">
                        <h1>{post.title}</h1>
                        <p>{post.excerpt}</p>
                        <p><Link to={`/post/${post.slug}`}><span className="portfolioLink">View Post <i className="far fa-arrow-circle-right"></i></span></Link></p>
                    </div>
                </Col>
            ))}
         </Row>
        
      );
    default:
      return (
        <div className="pageTitle blogTitle img">
            <h1><i className="fad fa-spinner-third fa-spin"></i></h1> 
        </div>
      );
  }
};
export default BlogPosts;