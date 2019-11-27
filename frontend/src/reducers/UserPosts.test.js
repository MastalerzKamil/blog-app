import reducer, { initialState } from 'reducers/UserPosts';
import * as actions from 'actions/FetchUserPosts';

describe('User Posts', () => {
  it('should return initial state', ()=> {
    const expected = {
      ...initialState,
    };
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it('should loading while fetching user posts', ()=>{
    const expected = {
      ...initialState,
      loading: true,
    };
    expect(reducer(undefined, actions.fetchUserPosts(1))).toEqual(expected);
  });

  it('should set posts after fetching', ()=> {
    const expected = {
      ...initialState,
      loading: false,
      posts: [{title: 'awesome title'}]
    };
    expect(reducer(undefined, actions.setUserPosts([{title: 'awesome title'}]))).toEqual(expected);
  });

  it('should process fetching posts', () => {
    const expected = {
      ...initialState,
    };
    expect(reducer(undefined, actions.processFetchingUserPosts())).toEqual(expected);
  });
});