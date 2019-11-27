import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Typography,
  IconButton,
} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import * as routes from 'constants/routes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '80vw'
  },
}));

const SinglePost = (props) => {
  const classes = useStyles();
  const { title, userId, postId } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' >
              <Grid item xs>
                <Typography variant='subtitle1' gutterBottom>
                  {title}
                </Typography>
              </Grid>
              <Grid item />
            </Grid>

            <Grid item>
              <Link to={routes.POST_DETAILS(userId, postId)}>
                <IconButton>
                  <KeyboardArrowRightOutlinedIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

SinglePost.defaultProps = {
  title: '',
  userId: 0,
  postId: 0,
};

SinglePost.propTypes = {
  title: PropTypes.string,
  userId: PropTypes.number,
  postId: PropTypes.number,
}

export default SinglePost;