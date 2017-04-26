import 'babel-polyfill'; //consider pulling in specific polyfills later
import React from 'react';
import {
    render
} from 'react-dom';
import configureStore from './store/configureStore';
import {
    Provider
} from 'react-redux';
import {
    Router,
    browserHistory
} from 'react-router'; //history HTML5 push state
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import './styles/styles.css'; //webpack import css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//If you were doing server-side rendering, you could pass initial state here
const store = configureStore();
store.dispatch(loadCourses());

render(<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
