import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { hashHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'

export default (initialState = {}) => {
    // ======================================================
    // 中间件配置
    // ======================================================
    const middleware = [thunk]

    // ======================================================
    // 增强工具
    // ======================================================
    const enhancers = []
    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.devToolsExtension
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }

    // ======================================================
    // Store 实例化 与热替换
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    )
    store.asyncReducers = {}

    // 订阅路由跳转
    store.unsubscribeHistory = hashHistory.listen(updateLocation(store))

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default
            store.replaceReducer(reducers(store.asyncReducers))
        })
    }

    return store
}
