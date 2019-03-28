import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { post } from '../../modules/auth/auth'

interface Action {
  type: string,
  payload: Object,
  [propName: string]: any,
}

function* login(action: Action) {
  localStorage.removeItem('token')
  const response = yield post('/login', action.payload).then(response => response.json())
  localStorage.setItem('token', response.token)
  yield put({ type: 'LOGIN_SUCCESS' })
  yield put(push('/dashboard'))
}

function* logout() {
  localStorage.removeItem('token')
  yield put(push('/login'))
}

export function* loginWatcher() {
  yield takeLatest('LOGIN', login)
}

export function* logoutWatcher() {
  yield takeLatest('LOGOUT', logout)
}

