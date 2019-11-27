import reducer, { initialState } from 'reducers/Dialog';
import * as actions from 'actions/Dialog';

describe('Dialog', () => {
  it('should return initial state',() => {
    const expected = {
      ...initialState
    };
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it('should open dialog', () => {
    const expected = {
      ...initialState,
      openedDialog: true,
    };
    expect(reducer(undefined, actions.showDialog())).toEqual(expected);
  })
})