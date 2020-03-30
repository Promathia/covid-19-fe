import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root";
import getStore from './state/Store';

const appStore = getStore();
const root = <Root store={appStore} />;
ReactDOM.render(root, document.getElementById('app'));
