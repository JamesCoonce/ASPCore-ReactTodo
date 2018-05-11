import 'isomorphic-fetch';
import {createAction, handleActions, combineActions } from 'redux-actions';
import { getTodo, createTodo, updateTodo, loadTodos, deleteTodo } from '../../../services/todoService';

export const ACTION_TYPES = {
    FETCH_TODO_LIST: '',
    FETCH_TODO: '',
    CREATE_TODO: '',
    UPDATE_TODO: '',
    DELETE_TODO: ''
};

const initialState = {
    loading: false
}

// Action Creators
export const loadTodosAction = () => ({
    type: ACTION_TYPES.FETCH_TODO_LIST,
    payload: loadTodos()
});

export const getTodoAction = id => ({
    type: ACTION_TYPES.FETCH_TODO,
    payload: getTodo(id)
});

export const createTodoAction = todo => ({
    type: ACTION_TYPES.CREATE_TODO,
    payload: createTodo(todo)
});

export const updateTodoAction = () => ({
    type: ACTION_TYPES.UPDATE_TODO,
    payload: updateTodo(todo)
});

export const deleteTodoAction = id => ({
    type: ACTION_TYPES.DELETE_TODO,
    payload: deleteTodo()
});

// Actions with redux-actions and redux-promise
export const getAllTodos = createAction('FETCH_TODO_LIST', async () => loadTodos );
export const getTodoById = createAction('FETCH_TODO', async id =>  getTodo(id) );
export const createNewTodo = createAction('CREATE_TODO', async todo => createTodo(todo));
export const updateTodoById = createAction('UPDATE_TODO', async todo => updateTodo(todo) );
export const deleteTodoById  = createAction('DELETE_TODO', async id => deleteTodo(id));

// Reducer

export default (state = initialState, action) => {
    switch(action.type){

    }
}