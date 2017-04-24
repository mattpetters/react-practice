import {
    createStore,
    applyMiddleware
} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer, initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
} //initialize your store with some state, especially when you are doing server side rendering
//check out react slingshot on github for more examples of middleware usage
//IE; redux dev tools
