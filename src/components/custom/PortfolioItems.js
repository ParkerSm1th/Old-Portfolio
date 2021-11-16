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
  const { state, error, data } = useApi('https://api.grpiz.io/portfolio/list');

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
        <Row className="portfolioItems">
            {data.items.map((item) => {
                if (item.link) {
                    return (
                        <Col xs={12} md={4}>
                            <div className="portfolioItem">
                                <img src={`${item.img}`}></img>
                                <h1>{item.name} <a href={`item.link.url`} target="_blank"><span className="portfolioLink">View Site <i class="far fa-arrow-circle-right"></i></span></a></h1>
                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        </Col>
                    )
                } else {
                    return (
                        <Col xs={12} md={4}>
                            <div className="portfolioItem">
                                <img src={`${item.img}`}></img>
                                <h1>{item.name} <span className="portfolioLink disabled">Private <i class="far fa-lock"></i></span></h1>
                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        </Col>
                    )
                }
            })}   
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