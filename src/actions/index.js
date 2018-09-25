import * as types from "../constants/actionTypes";

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILER,
  filter,
});

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id,
});

export const retrieve = () => ({
  types: [types.RETRIEVE_DATA, types.RETRIEVE_DATA_FAILURE],
  fetchAPI: {
    path: "/api/v1.0/tasks",
    method: "GET",
  },
});

