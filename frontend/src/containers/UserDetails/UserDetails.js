import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserDetailsActions from 'actions/FetchUserDetails';
import * as UserPostsActions from 'actions/FetchUserPosts';
import { UserDetails } from 'views';

const mapStateToProps = (state) => ({
  userDetails: state.UserDetailsReducer,
  userPosts: state.UserPostsReducer
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...UserDetailsActions,
    ...UserPostsActions
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)