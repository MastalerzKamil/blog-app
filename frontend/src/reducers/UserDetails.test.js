import reducer, { initialState } from 'reducers/UserDetails';
import * as actions from 'actions/FetchUserDetails';

describe('UserDetails', () =>{
  it('should return initial state', ()=> {
    const expected = {...initialState};
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it('should loading while fetching user details', ()=> {
    const expected = {
      ...initialState,
      loading: true,
    };
    expect(reducer(undefined, actions.fetchUserDetails(1))).toEqual(expected);
  });

  it('should set user details after fetch', ()=> {
    const expected = {
      ...initialState,
      info: {name: 'Chris Brown'},
    };
    expect(reducer(undefined, actions.setUserDetails({name: 'Chris Brown'})));
  });

  it('should process fetching user details', () => {
    const expected = {
      ...initialState,
    };
    expect(reducer(undefined, actions.processFetchingUserDetails())).toEqual(expected);
  });
});