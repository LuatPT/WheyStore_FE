import axios from 'axios';
import * as constants from '../../constants/index';
export const getListUserAction = () => {
  return (dispatch) => {
    axios
      .get(constants.api + '/users')
      .then((res) => {
        dispatch(getListUser(res.data));
      })
      .catch((err) => console.log(err));
  };
};
const getListUser = (listUser) => ({
  type: 'GET_LIST_USER',
  listUser,
});
