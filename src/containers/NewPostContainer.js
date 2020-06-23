import { connect } from 'react-redux';
import * as getNewPostAc from '../actions/getNewPostAction';
import { bindActionCreators } from 'redux';
import ListNewPost from '../components/ListNewPost';
const mapStateToProps = (state) => ({
  listPost: state.getNewPost,
});
const mapDispatchToProp = (dispatch) => ({
  getNewPostAc: bindActionCreators(getNewPostAc, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(ListNewPost);

