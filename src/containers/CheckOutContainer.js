import { connect } from 'react-redux';
import CheckOut from '../components/CheckOut';
const mapStateToProps = (state) => ({
  listCartToCheckOut: state.getListCart,
});
// const mapDispatchToProp = dispatch => ({
//   CartAction: bindActionCreators(CartAction, dispatch)
// })
export default connect(mapStateToProps, null)(CheckOut);
