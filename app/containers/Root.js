import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../configureStore';
import Routes from './Routes';

const history = createHistory();
const store = configureStore(history);

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>
);

export default Root;