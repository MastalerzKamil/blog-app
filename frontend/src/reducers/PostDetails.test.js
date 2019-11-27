import reducer, { initialState } from 'reducers/PostDetails';
import * as actions from 'actions/FetchPostDetails';
import * as commentsActions from 'actions/FetchCommentsForPost';

describe('Post Details reducer', () =>{
  it('should return initial state', () => {
    const expected = {
      ...initialState
    };
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it('should loading while fetching', ()=> {
    const expected = {
      ...initialState,
      loading: true,
    };

    expect(reducer(undefined, actions.fetchPostDetails(1))).toEqual(expected);
  });

  it('should stop loading after fetch posts', ()=> {
    const expected = {
      ...initialState,
      loading: false,
      info: {name: 'xyz'}
    }
    expect(reducer(undefined, actions.setPostDetails({name: 'xyz'}))).toEqual(expected);
  });

  it('should loading while fetch comments', ()=> {
    const expected = {
      ...initialState,
      loading: true,
    };
    expect(reducer(undefined, commentsActions.fetchCommentsForPost(1))).toEqual(expected);
  });

  it('should set fetched comments', ()=> {
    const expected = {
      ...initialState,
      loading: false,
      comments: {name: 'xyz'}
    }
    expect(reducer(undefined, commentsActions.setCommentsForPost({name: 'xyz'}))).toEqual(expected);
  });
})
