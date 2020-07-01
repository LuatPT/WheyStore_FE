import { connect } from 'react-redux';
import DetailProduct from '../../components/product/DetailProduct';
import * as DetailAction from '../../actions/product/checkExistProduct';
import * as getDetailById from '../../actions/product/getDetailProduct';
import * as add from '../../actions/cart/addToCart';
import * as update from '../../actions/cart/updateToCart';
import * as getRate from '../../actions/rate/getRateByProduct';

import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  userId: localStorage.getItem('userId'),
  cart: state.checkExist,
  product: state.detailProduct
});
const mapDispatchToProp = (dispatch) => ({
  DetailAction: bindActionCreators(DetailAction, dispatch),
  add: bindActionCreators(add, dispatch),
  update: bindActionCreators(update, dispatch),
  getDetailById: bindActionCreators(getDetailById, dispatch),
  getRate: bindActionCreators(getRate, dispatch),

});
export default connect(mapStateToProps, mapDispatchToProp)(DetailProduct);
