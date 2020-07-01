const checkExist = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_EXIST':
      return action.cart;
    default:
      return state;
  }
};
export default checkExist;
