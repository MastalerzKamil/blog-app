import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import * as routes from 'constants/routes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(8),
    width: '100%',
  }
}));

const UserHeader = (props) => {
  const classes = useStyles();
  const { username, handleOpenDialog } = props;

  return (
    <div className={classes.root}>
      <Link to={routes.HOME}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Typography variant='h4' gutterBottom>
        {username}
      </Typography>
      <IconButton onClick={() => handleOpenDialog()}>
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
  handleOpenDialog: PropTypes.func.isRequired,
}

export default UserHeader;