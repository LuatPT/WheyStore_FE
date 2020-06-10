export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch(logout('Success logout'));
  };
};

const logout = (message) => ({
  type: 'LOGOUT_ACTION',
  message,
});
