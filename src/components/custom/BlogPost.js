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

const BlogPost = (props) => {
  console.log(props);
  const { state, error, data } = useApi(`https://parker-smith-3.ghost.io/ghost/api/v4/content/posts/slug/${props.slug}/?key=4bbd9cc4ea0deccabfdf493e59`);

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
          <React.Fragment>
            <p>Blog post here with slug of {props.slug}</p>
          </React.Fragment>
        
      );
    default:
      return <p>loading..</p>;
  }
};
export default BlogPost;