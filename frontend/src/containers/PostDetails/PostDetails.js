import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserDetailsActions from 'actions/FetchUserDetails';
import * as PostDetailsActions from 'actions/FetchPostDetails';
import { PostDetails } from 'views';

const mapStateToProps = (state) => ({
  userDetails: state.UserDetailsReducer,
  postDetails: state.PostDetailsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...UserDetailsActions,
    ...PostDetailsActions
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
