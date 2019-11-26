import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const UserDetails = (props) => {
  const classes = useStyles();
  const { match, userDetails, actions } = props;
  const { userId } = match.params;

  useEffect(() => {
    actions.fetchUserDetails(userId)
  },[])

  if(userDetails.loading) {
    return (
      <CircularProgress />
    )
  }

  return (
    <div className={classes.root}>
      hello user
    </div>
  )
}

UserDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.node,
    }).isRequired,
  }).isRequired,
}

export default UserDetails;