import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import appReducer from './reducers/index';

const configureStore = (history) => createStore(
    combineReducers({ app: appReducer, router: routerReducer }),
    applyMiddleware(thunk, routerMiddleware(history), logger)
);

export default configureStore;
