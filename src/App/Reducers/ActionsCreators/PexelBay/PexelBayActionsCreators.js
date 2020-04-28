import axios from "axios";
import config from "../../../../Config";
import Actions from "../../Actions/PexelBayActions";

export const pexelBayGetAllData = () => (dispatch) => {
  dispatch({
    type: Actions.PEXEL_BAY_ACTIONS_GET_DATA,
  });
  axios
    .get(`https://pixabay.com/api/?key=${config.pixel_bay}`)
    .then((res) => {
      dispatch({
        type: Actions.PEXEL_BAY_ACTIONS_GET_DATA_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: Actions.PEXEL_BAY_ACTIONS_GET_DATA_FAILURE,
        payload: err,
      });
    });
};
