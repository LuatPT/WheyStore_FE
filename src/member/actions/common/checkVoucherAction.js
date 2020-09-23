import axios from 'axios';
import * as constants from '../../constants/index';
export const checkVoucherAction = (obj) => {
  return (dispatch) => {
    axios
      .get(constants.api + '/voucher/' + obj.voucher_code)
      .then((res) => {
        dispatch(checkVoucher(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const checkVoucher = (voucher) => ({
  type: 'CHECK_VOUCHER',
  voucher,
});
