import axios from "axios";
import config from "../../../../Config";
import Actions from "../../Actions/PexelBayActions";

export const getSelectedData = (tab, cancelToken = () => {}) => (dispatch) => {
  console.log(cancelToken, "cancelToken");
  return new Promise((resolve, reject) => {
    dispatch({
      type: Actions.GET_SELECTED_DATA,
    });
    axios
      .get(`https://pixabay.com/api/?key=${config.pixel_bay}&q=${tab}`, {
        cancelToken: cancelToken,
      })
      .then((response) => {
        dispatch({
          type: Actions.GET_SELECTED_DATA_SUCCESS,
          payload: response,
        });
        return resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: Actions.GET_SELECTED_DATA_FAILURE,
          payload: error,
        });
        reject(error);
      });
  });
};
