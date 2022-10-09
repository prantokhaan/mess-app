const initialData = {
  bazar: [],
};

export const bazarReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_BAZARS": {
      return {
        ...state,
        bazar: action.payload,
      };
    }

    default:
      return state;
  }
};
