import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import App from './App';

import encodeReducer from "./store/reducers/encodeReducer";
import decodeReducer from "./store/reducers/decodeReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    encode: encodeReducer,
    decode: decodeReducer
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
