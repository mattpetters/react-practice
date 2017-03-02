//Root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
}) //ES6 shorthand property names

export default rootReducer;
