import { connect } from 'react-redux';
import * as AddCate from '../../actions/category/addCateAction';
import { bindActionCreators } from 'redux';
import AddCateForm from '../../components/admin_cate/AddCateForm';


const mapDispatchToProp = (dispatch) => ({
  AddCate: bindActionCreators(AddCate, dispatch),
});
export default connect(null, mapDispatchToProp)(AddCateForm);
