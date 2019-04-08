import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth'
import newsReducer from './news'
import usersReducer from './users'

export default (history: any) => combineReducers({
  router: connectRouter(history),
  news: newsReducer,
  login: authReducer,
  users: usersReducer,
})
