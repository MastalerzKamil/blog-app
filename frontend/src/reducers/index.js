import { combineReducers } from 'redux';
import UserDetailsReducer from './UserDetails';
import UserPostsReducer from './UserPosts';

const rootReducer = combineReducers({
  UserDetailsReducer,
  UserPostsReducer
});

export default rootReducer;