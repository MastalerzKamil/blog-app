import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const CommentsGrid = (props) => {
  const classes = useStyles();
  const { match, shouldDisplay, actions } = props;
  const { fetchCommentsForPost } = actions;
  const { postId } = match.params;

  useEffect(() => {
    fetchCommentsForPost(postId)
  },[fetchCommentsForPost, postId]);

  console.log(props);

  return (
    <div className={classes.root}>
      Hello comments
    </div>
  )
};

CommentsGrid.defaultProps = {
  shouldDisplay: false,
}

CommentsGrid.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.node,
    }).isRequired,
  }).isRequired,
  shouldDisplay: PropTypes.bool.isRequired,
}

export default CommentsGrid;