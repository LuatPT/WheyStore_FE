import axios from 'axios';
import * as constants from '../../constants/index';
export const getAllVoucherAction = () => {
  return (dispatch) => {
    axios
      .get(constants.api + '/vouchers')
      .then((res) => {
        dispatch(getVoucher(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getVoucher = (listVoucher) => ({
  type: 'GET_VOUCHER',
  listVoucher,
});
