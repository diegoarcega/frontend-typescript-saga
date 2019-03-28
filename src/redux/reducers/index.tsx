import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import loginReducer from './login'
import newsReducer from './news'

export default (history: any) => combineReducers({
  router: connectRouter(history),
  news: newsReducer,
  login: loginReducer,
})

