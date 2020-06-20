var init = { list: [], total: 0 };
const listProductReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      console.log(action.productObj);
      return action.productObj;
    default:
      return state;
  }
};
export default listProductReducer;
