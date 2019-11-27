import * as types from 'constants/postDetailsActions';

const initialState={
  info: {},
  comments: [],
  loading: true,
};

export default function(state=initialState, action) {
  switch(action.type) {
    case types.FETCH_POST_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case types.SET_POST_DETAILS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    case types.FETCH_COMMENTS_FOR_POST:
      return {
        ...state,
        loading: true,
      };
    case types.SET_COMMENTS_FOR_POST:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      }
    default:
      return state;
  }
}