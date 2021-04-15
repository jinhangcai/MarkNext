import { combineReducers } from 'redux'
import locationReducer from './location'
import currentUser from './currentUser';
import subjectList from './subjectList';
import lessonCount from './lessonCount';
// 合并
export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        currentUser,
        subjectList,
        lessonCount,
        ...asyncReducers
    })
}

// 注入reducer
export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
