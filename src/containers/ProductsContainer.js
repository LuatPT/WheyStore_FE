import { connect } from "react-redux"
import Product from "../components/Product"

const mapStateToProps = state => ({
  listProduct: state.listProductReducer
})
// const mapDispatchToProp = dispatch => ({

// })
export default connect(mapStateToProps, null)(Product)