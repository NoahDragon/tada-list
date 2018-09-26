import * as types from "../constants/actionTypes";

let nextTodoId = 0;

const addTodoSuccessed = (data) => ({type: types.ADD_TODO, data});
const addTodoFailed = () => ({type: types.ADD_TODO_FAILURE});

export const addTodo = (text) => ({
  types: [addTodoSuccessed, addTodoFailed],
  fetchAPI: {
    path: "/api/v1.0/tasks",
    method: "PUT",
    body: {
      id: nextTodoId++,
      text,
      completed: false,
    },
  },
});

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

const toggleTodoSuccessed = (data) => ({type: types.TOGGLE_TODO, data});
const toggleTodoFailed = () => ({type: types.TOGGLE_TODO_FAILURE});

export const toggleTodo = (id) => ({
  types: [toggleTodoSuccessed, toggleTodoFailed],
  fetchAPI: {
    path: "/api/v1.0/toggle",
    method: "PUT",
    body: {
      id,
    },
  },
});

const retrieveSuccessed = (data) => ({type: types.RETRIEVE_DATA, data});
const retrieveFailed = () => ({type: types.RETRIEVE_DATA_FAILURE});

export const retrieve = () => ({
  types: [retrieveSuccessed, retrieveFailed],
  fetchAPI: {
    path: "/api/v1.0/tasks",
    method: "GET",
  },
});

