import { combineReducers } from 'redux';
import UserDetailsReducer from './UserDetails';
import UserPostsReducer from './UserPosts';
import PostDetailsReducer from './PostDetails';

const rootReducer = combineReducers({
  UserDetailsReducer,
  UserPostsReducer,
  PostDetailsReducer,
});

export default rootReducer;