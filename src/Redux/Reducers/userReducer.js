const initialData = {
  user: [],
};

export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
