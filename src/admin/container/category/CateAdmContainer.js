import { connect } from 'react-redux';
import * as GetListCategory from '../../../member/actions/category/getCategorysAction';
import { bindActionCreators } from 'redux';
import CateManager from '../../components/admin_cate/CateManager';

const mapStateToProps = (state) => ({
  listCate: state.listCateReducer
});
const mapDispatchToProp = (dispatch) => ({
  GetListCategory: bindActionCreators(GetListCategory, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(CateManager);

