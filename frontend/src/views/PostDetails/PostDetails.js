import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from '@material-ui/core';
import { PostHeader, CommentsGrid } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px',
  },
  loadingIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  body: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  }
}));

const PostDetails = (props) => {
  const classes = useStyles();
  const { match, userDetails, postDetails, actions } = props;
  const { fetchPostDetails, fetchUserDetails, fetchCommentsForPost } = actions;
  const { postId, userId } = match.params;

  useEffect(() => {
    fetchPostDetails(postId);
    fetchUserDetails(userId);
    fetchCommentsForPost(postId)
  },[fetchPostDetails, fetchUserDetails, fetchCommentsForPost, postId, userId]);

  if(postDetails.loading && userDetails.loading) {
    return (
      <CircularProgress size={100} className={classes.loadingIcon}/>
    )
  }

  return (
    <div className={classes.root}>
      <PostHeader userId={userId} username={userDetails.info.name} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        {postDetails.info.title}
      </Typography>
      <Typography className={classes.body} variant="body1" gutterBottom>
        {postDetails.info.body}
      </Typography>
      <CommentsGrid comments={postDetails.comments} shouldDisplay={true}/>
    </div>
  );
}

PostDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.node,
      postId: PropTypes.node,
    }).isRequired,
  }).isRequired,
  actions: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,
  postDetails: PropTypes.object.isRequired,
}

export default PostDetails;
