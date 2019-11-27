import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { UserHeader, PostsList } from './components';

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
  }
}));

const UserDetails = (props) => {
  const classes = useStyles();
  const { match, userDetails, userPosts, actions } = props;
  const { fetchUserDetails, fetchUserPosts } = actions;
  const { userId } = match.params;

  useEffect(() => {
    fetchUserDetails(userId);
    fetchUserPosts(userId);
  },[fetchUserDetails, fetchUserPosts, userId]);

  if(userDetails.loading && userPosts.loading) {
    return (
      <CircularProgress size={100} className={classes.loadingIcon}/>
    )
  }

  return (
    <div className={classes.root}>
      <UserHeader username={userDetails.info.name} />
      <PostsList posts={userPosts.posts} />
    </div>
  );
};

UserDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.node,
    }).isRequired,
  }).isRequired,
  userDetails: PropTypes.object.isRequired,
  userPosts: PropTypes.object.isRequired,
};

export default UserDetails;