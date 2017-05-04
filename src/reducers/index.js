//Root reducer
import {
    combineReducers
} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
//combineReducers() aggregates and combines the reducers for the application
//courses - shorthand for courses:courses
const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;
