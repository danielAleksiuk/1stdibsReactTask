import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import './assets/css/styles.css';

const rootElement = document.getElementById('app');

render(
    <Root />,
    rootElement
);

if (module.hot) {        
    module.hot.accept('./containers/Root', () => {
        const RootHot = require('./containers/Root').default;
        render(
            <AppContainer>
                <RootHot />
            </AppContainer>,
            rootElement
        );
    });
}