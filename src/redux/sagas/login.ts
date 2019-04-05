import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { authenticate } from '../../modules/api/auth'
import { AuthTypes } from '../types'

interface AuthenticateParams {
  email: string,
  password: string,
}

interface LoginAction {
  type: string,
  payload: AuthenticateParams,
  [propName: string]: any,
}

function* login(action: LoginAction) {
  localStorage.removeItem('token')
  const { email, password } = action.payload
  const response = yield authenticate({ email, password })
  localStorage.setItem('token', response.data.token)

  yield put({ type: AuthTypes.LOGIN_SUCCESS })
  yield put(push('/dashboard'))
}

function* logout() {
  localStorage.removeItem('token')
  yield put(push('/login'))
}

export function* loginWatcher() {
  yield takeLatest(AuthTypes.LOGIN_REQUESTED, login)
}

export function* logoutWatcher() {
  yield takeLatest(AuthTypes.LOGOUT, logout)
}
