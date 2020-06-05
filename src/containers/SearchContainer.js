import { connect } from "react-redux"
import Search from "../components/Search"

const mapStateToProps = state => ({
  keyWord: state.cateReducer
})
const mapDispatchToProp = dispatch => ({

})
export default connect(null, null)(Search)