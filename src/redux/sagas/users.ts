import { takeEvery, call, put } from 'redux-saga/effects'
import * as UsersApi from '../../modules/services/users.service'
import { UsersTypes } from '../types'

function* getAll() {
  const response = yield call(UsersApi.getAll)
  yield put({ type: UsersTypes.GET_ALL_USERS_SUCCESS, payload: response.data })
}

export function* usersWatcher() {
  yield takeEvery(UsersTypes.GET_ALL_USERS_REQUESTED, getAll)
}
