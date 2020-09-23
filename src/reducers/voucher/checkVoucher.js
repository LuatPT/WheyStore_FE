const checkVoucher = (state = 'Vui lòng nhập mã...', action) => {
  switch (action.type) {
    case 'CHECK_VOUCHER':
      return action.voucher;
    default:
      return state;
  }
};
export default checkVoucher;
