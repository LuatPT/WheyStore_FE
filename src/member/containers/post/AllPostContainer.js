import { connect } from 'react-redux';
import * as getAllPostAc from '../../actions/post/getAllPostAction';
import { bindActionCreators } from 'redux';
import AllPost from '../../components/post/AllPost';
const mapStateToProps = (state) => ({
  listAllPost: state.getListPost,
});
const mapDispatchToProp = (dispatch) => ({
  getAllPostAc: bindActionCreators(getAllPostAc, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProp)(AllPost);

