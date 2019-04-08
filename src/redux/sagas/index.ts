import { all } from 'redux-saga/effects'
// import { newsWatcher } from './news'
import { authWatcher } from './auth'
import { usersWatcher } from './users'

export function* rootSaga() {
  yield all([
    authWatcher(),
    // newsWatcher(),
    usersWatcher(),
  ])
}
