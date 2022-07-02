const initialData = {
  other: [],
};

export const otherReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_OTHERS": {
      return {
        ...state,
        other: action.payload,
      };
    }

    default:
      return state;
  }
};
