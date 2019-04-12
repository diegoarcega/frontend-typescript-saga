import { all } from 'redux-saga/effects'
import { authWatcher } from './auth'
import { usersWatcher } from './users'

export function* rootSaga() {
  yield all([authWatcher(), usersWatcher()])
}
