import {getTodo, loadTodos, createTodo, updateTodo, deleteTodo } from '../services/todoService';
// Actions
//Create
export const CREATE_TODO = 'CREATE_TODO'
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS'
export const CREATE_TODO_ERROR = 'CREATE_TODO_ERROR'


//Read
export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR'

export const GET_TODO = 'GET_TODO'
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'
export const GET_TODO_ERROR = 'GET_TODO_ERROR'


//Update
export const START_EDITING = 'START_EDITING'
export const CANCEL_EDITING = 'CANCEL_EDITING'

export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR'

export const COMPLETE_TODO = 'COMPLETE_TODO'


//Delete
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR' 

//Action Creators