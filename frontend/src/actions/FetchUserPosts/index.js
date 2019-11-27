import * as api from 'common/api';
import * as types from 'constants/userPostsActions';

export function fetchUserPosts(userId) {
  return function (dispatch) {
    dispatch(processFetchingUserPosts())
    return api.getPostsByUsersId(userId)
      .then(posts => {
        dispatch(setUserPosts(posts));
      });
  }
}

export function setUserPosts(posts) {
  return {
    type: types.SET_USER_POSTS,
    payload: posts
  };
}

export function processFetchingUserPosts() {
  return {
    type: types.FETCH_USER_POSTS,
  };
}