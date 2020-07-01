import { connect } from "react-redux"
import * as ListCateActions from '../../actions/category/getCategorysAction'
import Categorys from "../../components/category/Categorys"
import { bindActionCreators } from "redux"

// const mapStateToProps = state => ({
//   listCate: state.listCateReducer
// })
const mapDispatchToProp = dispatch => ({
  ListCateActions: bindActionCreators(ListCateActions, dispatch)
})
export default connect(null, mapDispatchToProp)(Categorys)