const checkExist = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_EXIST':
      console.log(action.cart);
      return action.cart;
    default:
      return state;
  }
};
export default checkExist;
