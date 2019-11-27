import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import { PostHeader, CommentsGrid } from './components';
import { AddComment } from 'dialogs';

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
  const { match, userDetails, dialog, postDetails, actions } = props;
  const {
    fetchPostDetails,
    fetchUserDetails,
    fetchCommentsForPost,
    showDialog,
    hideDialog,
  } = actions;
  const { postId, userId } = match.params;

  const [displayComments, setDisplayComments] = React.useState(false);

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
      <Grid content justify='space-between'>
        <Button color='primary' onClick={()=>setDisplayComments(true)}>
          Show Comments
        </Button>
        <Button color='primary' onClick={()=>showDialog()}>
          Add Comment
        </Button>
      </Grid>
      <CommentsGrid
        comments={postDetails.comments}
        shouldDisplay={displayComments}
      />
      <AddComment openedDialog={dialog.openedDialog} handleClose={hideDialog} />
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
  dialog: PropTypes.object.isRequired,
}

export default PostDetails;
