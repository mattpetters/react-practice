import * as types from '../actions/actionTypes';
//... spread operator, spreads the array so it's a new instance as if defined inline
//Object.assign() - create a deep copy of course passed in
//state=[], setting the default parameter in ES6
//these two combined return a new state that contains the new course that someone passed in
//Reducers let you slice up your store's state changes into disparate functions
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}
