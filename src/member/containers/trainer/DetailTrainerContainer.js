import { connect } from 'react-redux';
import * as DetailTrainerAc from '../../actions/trainer/getDetailTrainer';
import { bindActionCreators } from 'redux';
import DetailTrainer from '../../components/trainer/DetailTrainer';

const mapStateToProps = (state) => ({
  trainer: state.detailTrainer
});
const mapDispatchToProp = (dispatch) => ({
  DetailTrainerAc: bindActionCreators(DetailTrainerAc, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProp)(DetailTrainer);
