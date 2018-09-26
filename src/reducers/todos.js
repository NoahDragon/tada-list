import * as types from "../constants/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return action.data;
    case types.RETRIEVE_DATA:
      return action.data;
    case types.TOGGLE_TODO:
      return action.data;
    default:
      return state;
  }
};

export default todos;
