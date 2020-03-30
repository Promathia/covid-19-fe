import React from 'react';
import App from './components/structure/App';
import { Provider } from 'react-redux';

const Root = (props) =>
    <Provider store={props.store}>
        <App/>
    </Provider>;

export default Root;
