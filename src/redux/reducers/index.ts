import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth'
import usersReducer from './users'

export default (history: any) => combineReducers({
  router: connectRouter(history),
  login: authReducer,
  users: usersReducer,
})
