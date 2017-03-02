export default function courseReducer(state = [], action){
//default parameters in ES6
    switch(action.type){
        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.course)];
            //... spread operator, spreads the array so it's a new instance as if defined inline
            //Object.assign() - create a deep copy of course passed in
            //these two combined return a new state that contains the new course that someone passed in
        default:
            return state;
    }
}