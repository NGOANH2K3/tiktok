//6.
import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_ALL, CANCEL_EDIT } from './constant';

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const delelteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
});

export const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload,
});

export const clearAllTodo = () => ({
    type: CLEAR_ALL,
});

export const cancelEdit = () => ({
    type: CANCEL_EDIT,
});
