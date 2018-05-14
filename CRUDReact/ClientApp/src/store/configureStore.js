import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const defaultMiddlewares = [
    thunk,
    promiseMiddleware
];


const composeMiddlewares = middlewares => compose(applyMiddleware(...defaultMiddlewares, ...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const initialize = (initialState = {}, middlewares = []) => createStore(reducers, initialState, composeMiddlewares(middlewares));

export default initialize;

/*export default function configureStore(history, initialState) {
    const middleware = [
        thunk,
        promiseMiddleware,
        routerMiddleware(history)
    ];
  
    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }
  
    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });
  
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
} */
  