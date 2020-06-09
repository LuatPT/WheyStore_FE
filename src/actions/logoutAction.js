export const logoutAction = () => {
  return (dispatch) => {
    dispatch(logout('Success logout'));
  };
};

const logout = (message) => ({
  type: 'LOGOUT_ACTION',
  message,
});
