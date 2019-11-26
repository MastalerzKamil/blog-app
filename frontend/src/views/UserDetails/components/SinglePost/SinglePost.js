import React from 'react';
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
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
}));

const SinglePost = () => {
  const classes = useStyles();

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
                  Standard license
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

export default SinglePost;