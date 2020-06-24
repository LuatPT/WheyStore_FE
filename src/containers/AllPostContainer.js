import { connect } from 'react-redux';
import * as getAllPostAc from '../actions/getAllPostAction';
import { bindActionCreators } from 'redux';
import AllPost from '../components/AllPost';
const mapStateToProps = (state) => ({
  listAllPost: state.getListPost,
});
const mapDispatchToProp = (dispatch) => ({
  getAllPostAc: bindActionCreators(getAllPostAc, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(AllPost);

