import { takeEvery, call, put } from 'redux-saga/effects'
import { getAll as getAllUsers } from '../../modules/auth/auth'
import { UsersTypes } from '../types'

function* getAll() {
  const response = yield call(getAllUsers)
  yield put({ type: UsersTypes.GET_ALL_USERS_SUCCESS, payload: response })
}

export function* usersWatcher() {
  yield takeEvery(UsersTypes.GET_ALL_USERS_REQUESTED, getAll)
}
