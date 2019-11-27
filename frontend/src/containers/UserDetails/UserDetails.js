import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserDetailsActions from 'actions/FetchUserDetails';
import * as UserPostsActions from 'actions/FetchUserPosts';
import * as DialogActions from 'actions/Dialog';
import { UserDetails } from 'views';

const mapStateToProps = (state) => ({
  userDetails: state.UserDetailsReducer,
  userPosts: state.UserPostsReducer,
  dialog: state.DialogReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...UserDetailsActions,
    ...UserPostsActions,
    ...DialogActions,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)