import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

import { rootSaga } from './sagas/index'

// history
export const history = createBrowserHistory()

// middlewares
const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(routerMiddleware(history), sagaMiddleware)

// store
const store = createStore(
  createRootReducer(history),
  compose(middlewares),
)
sagaMiddleware.run(rootSaga)

export default store
