import * as types from '../actions/actionTypes';
import initialState from './initialState';
//... spread operator, spreads the array so it's a new instance as if defined inline
//Object.assign() - create a deep copy of course passed in
//state=[], setting the default parameter in ES6
//these two combined return a new state that contains the new course that someone passed in
//Reducers let you slice up your store's state changes into disparate functions
export default function courseReducer(state = initialState.courses,  action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [ 
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}
