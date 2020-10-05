const listCateReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_VOUCHER':
      return action.listVoucher
    default:
      return state
  }
}
export default listCateReducer