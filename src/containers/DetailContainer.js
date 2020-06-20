import { connect } from 'react-redux';
import DetailProduct from '../components/DetailProduct';
import * as DetailAction from '../actions/checkExistProduct';
import * as getDetailById from '../actions/getDetailProduct';
import * as add from '../actions/addToCart';
import * as update from '../actions/updateToCart';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  userId: localStorage.getItem('userId'),
  cart: state.checkExist,
  product: state.detailProduct,
});
const mapDispatchToProp = (dispatch) => ({
  DetailAction: bindActionCreators(DetailAction, dispatch),
  add: bindActionCreators(add, dispatch),
  update: bindActionCreators(update, dispatch),
  getDetailById: bindActionCreators(getDetailById, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProp)(DetailProduct);
