import * as api from 'common/api';
import * as types from 'constants/userDetailsActions';
import { processFetchingPostDetails } from '../FetchPostDetails';

export function fetchUserDetails(userId) {
  return function (dispatch) {
    dispatch(processFetchingPostDetails())
    return api.getUserDetails(userId)
      .then(data => {
        dispatch(setUserDetails(data))
      });
  }
}

export function setUserDetails(userDetailsData) {
  return {
    type: types.SET_USER_DETAILS,
    payload: userDetailsData
  }
}

export function processFetchingUserDetails() {
  return {
    type: types.FETCH_USER_DETAILS,
  }
}