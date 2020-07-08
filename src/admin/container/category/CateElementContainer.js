import { connect } from 'react-redux';
import * as GetListCategory from '../../../member/actions/category/getCategorysAction';
import * as UpdateCategory from '../../actions/category/updateCateAction';
import * as DeleteCategory from '../../actions/category/deleteCateAction';
import { bindActionCreators } from 'redux';
import CateElement from '../../components/admin_cate/CateElement';

const mapDispatchToProp = (dispatch) => ({
  UpdateCategory: bindActionCreators(UpdateCategory, dispatch),
  DeleteCategory: bindActionCreators(DeleteCategory, dispatch),
});
export default connect(null, mapDispatchToProp)(CateElement);

