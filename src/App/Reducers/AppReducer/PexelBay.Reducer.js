import Actions from "../Actions/PexelBayActions";

const INITIAL_STATE = {
  data: [],
  error: false,
};

const pexelBayReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case Actions.PEXEL_BAY_ACTIONS_GET_DATA:
      return {
        ...state,
      };
    case Actions.PEXEL_BAY_ACTIONS_GET_DATA_SUCCESS:
      return {
        ...state,
        data: [...payload.data.hits],
      };
    case Actions.PEXEL_BAY_ACTIONS_GET_DATA_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default pexelBayReducer;
