import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const defaultMiddlewares = [
    thunk,
    promiseMiddleware
];

const composeMiddlewares = middlewares => compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState = {}, middlewares = []) => createStore(reducer, initialState, composeMiddlewares(middlewares));

export default initialize;