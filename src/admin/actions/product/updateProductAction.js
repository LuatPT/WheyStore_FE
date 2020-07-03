import axios from 'axios';
import * as constants from '../../constants/index';
export const updateProductAction = (obj) => {
  return (dispatch) => {
    axios
      .put(constants.api + '/products/' + obj.product_id, obj,
    )
      .then((res) => {
        dispatch(updateProduct(res.data));
        var lang = 'vi-VN'
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices.filter(voice => voice.lang == lang)[0];
        msg.text = res.data;
        msg.lang = lang;
        speechSynthesis.speak(msg);
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
};
const updateProduct = (message) => ({
  type: 'UPDATE_PRODUCT',
  message,
});
