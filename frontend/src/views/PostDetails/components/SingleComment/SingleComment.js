import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    width: '80vw'
  }
}));

const SingleComment = (props) => {
  const classes = useStyles();
  const { comment } = props;

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid container direction='row' justify='space-between' alignItems='flex-start'>
          <Typography variant="h6" gutterBottom>
            {comment.name}
          </Typography>
          <div/>
          <Typography variant="h6" gutterBottom>
            {comment.email}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs>
            <Typography variant="body1" gutterBottom>
              {comment.body}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
};

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default SingleComment;