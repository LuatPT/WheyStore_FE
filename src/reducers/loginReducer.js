const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.obj
    default:
      return state
  }
}
export default loginReducer