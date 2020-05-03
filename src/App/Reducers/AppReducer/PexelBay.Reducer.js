import Actions from "../Actions/PexelBayActions";

const INITIAL_STATE = {
  data: [],
  error: "",
  isFetching: false,
  selectedData: [],
  imageId: [],
};

const pexelBayReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Actions.GET_SELECTED_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.GET_SELECTED_DATA_SUCCESS:
      const id = payload.data.hits.map((item) => item.id);
      return {
        ...state,
        isFetching: false,
        selectedData: [...payload.data.hits],
        imageId: [...id],
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
