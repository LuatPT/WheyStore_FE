import axios from 'axios';
import * as constants from '../../constants/index';
export const sendMailAction = (obj) => {
  //keyword, category_ids, page
  return (dispatch) => {
    axios
      .post(constants.api + '/mail', obj)
      .then((res) => {
        dispatch(sendMail(res.data.message));
      })
      .catch((err) => console.log(err));
  };
};
const sendMail = (message) => ({
  type: 'SEND_MAIL',
  message,
});
