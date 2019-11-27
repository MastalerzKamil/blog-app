import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as routes from 'constants/routes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(8),
    width: '100%',
  }
}));

const PostHeader = (props) => {
  const classes = useStyles();
  const { username, userId } = props;
  return (
    <div className={classes.root}>
      <Link to={routes.USER_DETAILS(userId)}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Typography variant='h4' gutterBottom>
        {username}
      </Typography>
      <div/>
    </div>
  )
};

PostHeader.defaultProps = {
  username: '',
}

PostHeader.propTypes = {
  username: PropTypes.string,
}

export default PostHeader;
