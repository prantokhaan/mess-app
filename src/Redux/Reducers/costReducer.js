const initialData = {
  cost: [],
};

export const costReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_COSTS": {
      return {
        ...state,
        cost: action.payload,
      };
    }

    default:
      return state;
  }
};
