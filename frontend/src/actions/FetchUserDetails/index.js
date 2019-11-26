import * as api from 'common/api';
import * as types from 'constants/userDetailsActions';

export function fetchUserDetails(userId) {
  return function (dispatch) {
    return api.getUserDetails(userId)
      .then(data => {
        dispatch(setUserDetails(data))
      });
  }
}

export function setUserDetails(userDetailsData) {
  return {
    type: types.FETCH_USER_DETAILS,
    payload: userDetailsData
  }
}