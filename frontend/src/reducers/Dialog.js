import * as actionTypes from 'constants/dialogActions';

export const initialState = { openedDialog: false };

export default function(state=initialState, action) {
  switch(action.type) {
    case actionTypes.SHOW_DIALOG: {
      return {
        ...state,
        openedDialog: true,
      };
    }
    case actionTypes.HIDE_DIALOG: {
      return {
        ...state,
        openedDialog: false,
      }
    }
    default: {
      return state;
    }
  }
}
