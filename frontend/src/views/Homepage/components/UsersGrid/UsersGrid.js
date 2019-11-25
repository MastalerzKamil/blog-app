import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { UserCard } from '../index';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 275
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const UsersGrid = () => {
  const classes = useStyles();
  const tmpCompany = {
    name: 'moja firma',
    catchPhrase: 'djfosdjof',
    bs: 'dskfjsd'
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={7}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <UserCard company={tmpCompany} className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UsersGrid;