import axios from 'axios';
import * as constants from '../constants/index';
export const getAvgRate = (obj) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/avgrate/' + obj.product_id)
      .then((res) => {
        dispatch(avgRate(res.data.avgRate));
      })
      .catch((err) => console.log(err));
  };
};
const avgRate = (avgRate) => ({
  type: 'AVG_RATE',
  avgRate,
});
