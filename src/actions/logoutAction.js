export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    dispatch(logout('Success logout'));
  };
};

const logout = (message) => ({
  type: 'LOGOUT_ACTION',
  message,
});
