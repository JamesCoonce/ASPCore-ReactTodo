import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { bindActionCreators } from 'redux';
import initStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = initStore();
//const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement);

registerServiceWorker();
