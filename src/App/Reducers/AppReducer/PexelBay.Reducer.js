import Actions from "../Actions/PexelBayActions";

const INITIAL_STATE = {
  data: [],
  error: "",
  isFetching: false,
  selectedData: [],
};

const pexelBayReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Actions.PEXEL_BAY_ACTIONS_GET_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.PEXEL_BAY_ACTIONS_GET_DATA_SUCCESS:
      return {
        ...state,
        data: [...payload.data.hits],
      };
    case Actions.PEXEL_BAY_ACTIONS_GET_DATA_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case Actions.GET_SELECTED_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_SELECTED_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        selectedData: [...payload.data.hits],
      };
    case Actions.GET_SELECTED_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default pexelBayReducer;
