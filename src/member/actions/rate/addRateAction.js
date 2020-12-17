import axios from 'axios';
import * as constants from '../../constants/index';

export const addRateAction = (obj) => {
  return (dispatch, getState) => {
    axios
      .post(constants.api + '/rates/', obj, {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => {
        const { getRateByProduct } = getState();
        getRateByProduct.push(obj);
        dispatch(getRate([...getRateByProduct]));
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
const addRate = (message) => ({
  type: 'ADD_RATE',
  message,
});
const getRate = (listRate) => ({
  type: 'GET_RATE',
  listRate,
});