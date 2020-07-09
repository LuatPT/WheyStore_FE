import axios from 'axios';
import * as constants from '../../constants/index';

export const addPostAction = (obj) => {
  return (dispatch) => {
    axios
      .post(constants.api + '/posts', obj,
    )
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
