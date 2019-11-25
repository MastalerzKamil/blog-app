import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    width: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const UserCard = (props) => {
  const {
    name,
    company,
    email,
    phone,
    website,
    className
  } = props;
  const classes = useStyles();

  return (
    <Card className={className.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {email}
          <br/>
          {phone}
          <br />
          {website}
        </Typography>
        <Typography variant="body2" component="p">
          {company.name}
          <br />
          {company.catchPhrase}
          <br />
          {company.bs}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  )
}

UserCard.defaultProps = {
  name: '',
  email: '',
  phone: '',
  website: '',
}

UserCard.propTypes = {
  name: PropTypes.string,
  company: PropTypes.object.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  className: PropTypes.object.isRequired,
}

export default UserCard;