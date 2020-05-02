import axios from "axios";
import config from "../../../../Config";
import Actions from "../../Actions/PexelBayActions";

export const getSelectedData = (tab, source) => (dispatch) => {
  console.log(source.token, "token inside actions");
  dispatch({
    type: Actions.GET_SELECTED_DATA,
  });
  axios
    .get(`https://pixabay.com/api/?key=${config.pixel_bay}&q=${tab}`, {
      cancelToken: source.token,
    })
    .then((response) => {
      dispatch({
        type: Actions.GET_SELECTED_DATA_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      }
      dispatch({
        type: Actions.GET_SELECTED_DATA_FAILURE,
        payload: error,
      });
    });
};
