const initialData = {
  member: [],
};

export const memberReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_MEMBERS": {
      return {
        ...state,
        member: action.payload,
      };
    }

    default:
      return state;
  }
};
