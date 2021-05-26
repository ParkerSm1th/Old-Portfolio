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
  const { state, error, data } = useApi('https://parker-smith-3.ghost.io/ghost/api/v4/content/posts/?key=4bbd9cc4ea0deccabfdf493e59');

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
        <Row className="portfolioItems">
            {data.posts.map((post) => (
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