import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserDetailsActions from 'actions/FetchUserDetails';
import { UserDetails } from 'views';

const mapStateToProps = (state) => ({
  userDetails: state.UserDetailsReducer
});

const mapDispatchToProps = (dispatch) => ({
  userDetailsActions: bindActionCreators(UserDetailsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails)