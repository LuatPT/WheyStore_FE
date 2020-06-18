import * as constant from './index';
export default {
  login: ({ username, password }) => {
    const request = new Request(constant.api + '/api/v1/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      });
  },
  logout: (params) => Promise.resolve(),
  checkAuth: (params) => Promise.resolve(),
  checkError: (error) => Promise.resolve(),
  getPermissions: (params) => Promise.resolve(),
};