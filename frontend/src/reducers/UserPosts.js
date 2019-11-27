import * as types from 'constants/userPostsActions';

export const initialState = {
  posts: [],
  loading: true,
}

export default function (state=initialState, action) {
  switch(action.type) {
    case types.FETCH_USER_POSTS:
      return {
        ...state,
        loading: true
      };
    case types.SET_USER_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    default:
      return state;
  }
}