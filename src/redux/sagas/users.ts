import {
 takeEvery, call, put, all,
} from 'redux-saga/effects'
import { push } from 'connected-react-router';
import * as UsersApi from '../../modules/services/users.service'
import { UsersTypes } from '../types'

function* getAll() {
  const response = yield call(UsersApi.getAll)
  yield put({ type: UsersTypes.GET_ALL_USERS_SUCCESS, payload: response.data })
}

function* deleteUser(action: any) {
  yield call(UsersApi.deleteUser, action.payload.id)
  yield put({ type: UsersTypes.DELETE_USER_SUCCESS, payload: action.payload })
  yield put(push('/users'))
}

function* updateUser(action: any) {
  const response = yield call(UsersApi.updateUser, action.payload.user)
  yield put({ type: UsersTypes.UPDATE_USER_SUCCESS, payload: { user: response.data } })
  yield put(push('/users'))
}

function* createUser(action: any) {
  const response = yield call(UsersApi.createUser, action.payload.user)
  yield put({ type: UsersTypes.CREATE_USER_SUCCESS, payload: { user: response.data } })
  yield put(push('/users'))
}

export function* usersWatcher() {
  yield all([
    yield takeEvery(UsersTypes.GET_ALL_USERS_REQUESTED, getAll),
    yield takeEvery(UsersTypes.UPDATE_USER_REQUESTED, updateUser),
    yield takeEvery(UsersTypes.DELETE_USER_REQUESTED, deleteUser),
    yield takeEvery(UsersTypes.CREATE_USER_REQUESTED, createUser),
  ])
}
