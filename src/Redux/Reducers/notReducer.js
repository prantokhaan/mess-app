const initialData = {
  not: [],
};

export const notReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_NOTS": {
      return {
        ...state,
        not: action.payload,
      };
    }

    default:
      return state;
  }
};
