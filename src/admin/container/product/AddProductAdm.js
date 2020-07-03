import { connect } from 'react-redux';
import * as AddProduct from '../../actions/product/addProductAction';
import { bindActionCreators } from 'redux';
import AddProductForm from '../../components/admin_product/AddProductForm';


const mapDispatchToProp = (dispatch) => ({
  AddProduct: bindActionCreators(AddProduct, dispatch),
});
export default connect(null, mapDispatchToProp)(AddProductForm);
