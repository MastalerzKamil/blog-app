import { combineReducers } from 'redux';
import UserDetailsReducer from './UserDetails';
import UserPostsReducer from './UserPosts';
import PostDetailsReducer from './PostDetails';
import DialogReducer from './Dialog'

const rootReducer = combineReducers({
  UserDetailsReducer,
  UserPostsReducer,
  PostDetailsReducer,
  DialogReducer
});

export default rootReducer;