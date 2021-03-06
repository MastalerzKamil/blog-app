import * as api from 'common/api';
import * as types from 'constants/postDetailsActions';

export function fetchPostDetails(postId) {
  return function (dispatch) {
    dispatch(processFetchingPostDetails())
    return api.getPostById(postId)
      .then(post => {
        dispatch(setPostDetails(post))
      });
  }
}

export function setPostDetails(postDetailsData) {
  return {
    type: types.SET_POST_DETAILS,
    payload: postDetailsData
  }
}

export function processFetchingPostDetails() {
  return {
    type: types.FETCH_POST_DETAILS
  };
}