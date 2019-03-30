import { takeEvery, call, put } from 'redux-saga/effects'
import { getAll as getAllUsers } from '../../modules/auth/auth'

function* getAll() {
  const response = yield call(getAllUsers)
  yield put({ type: 'GET_ALL_USERS_SUCCESS', payload: response})
}

export function* usersWatcher() {
  yield takeEvery('GET_ALL_USERS_REQUESTED', getAll)
}