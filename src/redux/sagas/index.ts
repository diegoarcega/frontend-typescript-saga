import { all } from 'redux-saga/effects'
import { newsWatcher } from './news'
import { loginWatcher, logoutWatcher } from './login'
import { usersWatcher } from './users'

export function* rootSaga() {
  yield all([
    newsWatcher(),
    loginWatcher(),
    logoutWatcher(),
    usersWatcher(),
  ])
}