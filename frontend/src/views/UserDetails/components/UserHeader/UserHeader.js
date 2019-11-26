import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(8),
  }
}));

const UserHeader = (props) => {
  const classes = useStyles();
  const { username } = props;

  return (
    <div className={classes.root}>
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        {username}
      </Typography>
      <IconButton>
        <AddCircleIcon />
      </IconButton>
    </div>
  );
};

UserHeader.defaultProps = {
  username: '',
}

UserHeader.propTypes = {
  username: PropTypes.string,
}

export default UserHeader;