import axios from 'axios';
import * as constants from '../../constants/index';
export const getRateByProduct = (obj) => {

  return (dispatch) => {
    axios
      .get(constants.api + '/rate/' + obj.product_id)
      .then((res) => {
        console.log(res.data);

        dispatch(getRate(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getRate = (listRate) => ({
  type: 'GET_RATE',
  listRate,
});
