import * as types from 'constants/userDetailsActions';

const initialState={
  info: {},
  loading: true,
};



export default function(state=initialState, action) {
  switch(action.type) {
    case types.FETCH_USER_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case types.SET_USER_DETAILS:
      return {
        ...state,
        loading: false,
        info: action.payload
      };
    default:
      return state;
  }
}