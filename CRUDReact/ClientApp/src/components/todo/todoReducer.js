import 'isomorphic-fetch';
import {createAction, handleActions, combineActions } from 'redux-actions';
import { getTodo, createTodo, updateTodo, loadTodos, deleteTodo } from '../../services/todoService';

export const ACTION_TYPES = {
    FETCH_TODO_LIST: 'FETCH_TODO_LIST',
    FETCH_TODO: 'FETCH_TODO',
    CREATE_TODO: 'CREATE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO'
};

const initialState = {
    loading: true
}

// Action Creators
export const getAllTodos = () => ({
    type: ACTION_TYPES.FETCH_TODO_LIST,
    payload: loadTodos()
});

export const getTodoById = id => ({
    type: ACTION_TYPES.FETCH_TODO,
    payload: getTodo(id)
});

export const createNewTodo = todo => ({
    type: ACTION_TYPES.CREATE_TODO,
    payload: createTodo(todo)
});

export const updateTodoById = todo => ({
    type: ACTION_TYPES.UPDATE_TODO,
    payload: updateTodo(todo)
});

export const deleteTodoById = id => ({
    type: ACTION_TYPES.DELETE_TODO,
    payload: deleteTodo()
});

// Actions with redux-actions and redux-promise
/*export const getAllTodos = createAction('FETCH_TODO_LIST', async () => {
    return loadTodos();
});
export const getTodoById = createAction('FETCH_TODO', async id => {
    return getTodo(id);
});
export const createNewTodo = createAction('CREATE_TODO', async todo => {
    return createTodo(todo);
});
export const updateTodoById = createAction('UPDATE_TODO', async todo => {
    return updateTodo(todo);
});
export const deleteTodoById  = createAction('DELETE_TODO', async id => {
    return deleteTodo(id);
});*/

// Refactored Actions with redux-actions and redux-promise
/*export const getAllTodos = createAction('FETCH_TODO_LIST', async () => loadTodos );
export const getTodoById = createAction('FETCH_TODO', async id =>  getTodo(id) );
export const createNewTodo = createAction('CREATE_TODO', async todo => createTodo(todo));
export const updateTodoById = createAction('UPDATE_TODO', async todo => updateTodo(todo) );
export const deleteTodoById  = createAction('DELETE_TODO', async id => deleteTodo(id)); */
// Reducer

export default (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_TODO_LIST: 
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case ACTION_TYPES.FETCH_TODO:
        case ACTION_TYPES.CREATE_TODO:
        case ACTION_TYPES.UPDATE_TODO:
            return {
                ...state,
                loading: false,
                todo: action.payload
            };
        case ACTION_TYPES.DELETE_TODO:
            return {
                ...state,
                todo: {}
            }
        default:
            return state;
        
    }
}