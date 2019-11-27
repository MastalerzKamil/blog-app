import * as api from 'common/api';
import * as types from 'constants/postDetailsActions';

export function fetchCommentsForPost(postId) {
  return function (dispatch) {
    dispatch(processFetchingCommentsForPost())
    return api.getCommentsById(postId)
      .then(comments => {
        dispatch(setCommentsForPost(comments))
      });
  }
}

export function setCommentsForPost(commentsData) {
  return {
    type: types.SET_COMMENTS_FOR_POST,
    payload: commentsData
  }
}

export function processFetchingCommentsForPost() {
  return {
    type: types.FETCH_COMMENTS_FOR_POST
  };
}