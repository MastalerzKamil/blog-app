import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { UserCard } from '../index';
import { GetUsers } from 'hooks';

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
  const fetchedUsers = GetUsers();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={7}>
          {fetchedUsers.map(value => (
            <Grid key={value.id} item>
              <UserCard
                className={classes.paper}
                company={value.company}
                name={value.name}
                email={value.email}
                phone={value.phone}
                website={value.website}
                userId={value.id}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default UsersGrid;