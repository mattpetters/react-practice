import 'babel-polyfill'; //consider pulling in specific polyfills later
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router'; //history HTML5 push state
import routes from './routes';
import './styles/styles.css'; //webpack import css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);