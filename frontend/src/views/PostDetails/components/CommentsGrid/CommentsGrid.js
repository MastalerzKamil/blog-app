import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { SingleComment } from '..';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const CommentsGrid = (props) => {
  const classes = useStyles();
  const { shouldDisplay, comments } = props;
  if (shouldDisplay) {
    return (
      <div className={classes.root}>
        {comments.map((comment, index) => {
          return <SingleComment key={index} comment={comment} />
        })}
      </div>
    )
  }
  return null;
};

CommentsGrid.defaultProps = {
  shouldDisplay: false,
}

CommentsGrid.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
}

export default CommentsGrid;