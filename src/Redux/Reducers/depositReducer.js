const initialData = {
  deposit: [],
};

export const depositReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_DEPOSITS": {
      return {
        ...state,
        deposit: action.payload,
      };
    }

    default:
      return state;
  }
};
