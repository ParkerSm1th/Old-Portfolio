import React from 'react';
import {apiStates, useApi} from './useAPI'
import { ReactHtmlParser }  from 'react-html-parser'; 
import {
  useParams
} from "react-router-dom";

import {
  Link
} from 'react-router-dom';

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const BlogPost = ({ match }) => {
  let { slug } = useParams()
  const { state, error, data } = useApi(`https://parker-smith-3.ghost.io/ghost/api/v4/content/posts/slug/${slug}/?key=4bbd9cc4ea0deccabfdf493e59`);

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      let post = data.posts[0];
      return (
          <React.Fragment>
            <div className="pageTitle blogTitle img">
                <h1>{post.title}</h1> 
                <h2>{formatDate(post.created_at)}</h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </React.Fragment>
        
      );
    default:
      return (
        <React.Fragment>
            <div className="pageTitle blogTitle img">
                <h1><i className="fad fa-spinner-third fa-spin"></i></h1> 
            </div>
          </React.Fragment>
      );
  }
};
export default BlogPost;