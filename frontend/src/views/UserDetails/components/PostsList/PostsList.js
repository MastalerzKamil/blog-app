import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SinglePost from '../SinglePost';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

const PostsList = (props) => {
  const classes = useStyles();
  const { posts } = props
  return (
    <div className={classes.root}>
      {posts.map((post, index) => {
        return (
          <SinglePost key={index} postId={post.id} userId={post.userId} title={post.title} />
        );
      })}
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
