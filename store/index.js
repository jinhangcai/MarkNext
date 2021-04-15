// import createStore from './createStore';
//
// const initialState = window.___INITIAL_STATE__;
// export default createStore(initialState);
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import { applyMiddleware, compose, createStore } from 'redux'
const middleware = [thunk]
const ADD = 'add';

const defaultState = {
    counter: 28
}

function reducer(preState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...preState,
                counter: preState.counter+1
            }
        default:
            return preState
    }
}

function createMyStore(initialState = defaultState) {
    const MyStore = createStore(makeRootReducer(), compose(
        applyMiddleware(...middleware),
    ));
    // const MyStore = createStore(reducer, initialState);
    return MyStore
}

export default createMyStore
