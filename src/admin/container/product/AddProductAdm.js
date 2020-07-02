import { connect } from 'react-redux';
import * as AddProduct from '../../actions/product/addProductAdm';
import { bindActionCreators } from 'redux';
import NewProductManager from '../../components/admin_product/NewProductManager';


const mapDispatchToProp = (dispatch) => ({
  AddProduct: bindActionCreators(AddProduct, dispatch),
});
export default connect(null, mapDispatchToProp)(NewProductManager);
