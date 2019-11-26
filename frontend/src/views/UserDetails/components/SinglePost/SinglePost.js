import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography,
  IconButton,
} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined'

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
  const { title } = props;

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
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {title}
                </Typography>
              </Grid>
              <Grid item />
            </Grid>

            <Grid item>
              <IconButton>
                <KeyboardArrowRightOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

SinglePost.defaultProps = {
  title: ''
};

SinglePost.propTypes = {
  title: PropTypes.string,
}

export default SinglePost;