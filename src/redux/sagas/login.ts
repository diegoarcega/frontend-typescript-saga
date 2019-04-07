import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { authenticate, setToken, logout as removeToken } from '../../modules/services/auth.service'
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
  const { email, password } = action.payload
  try {
    const response = yield authenticate({ email, password })
    const { token } = response.data
    setToken(token)
    yield put({ type: AuthTypes.LOGIN_SUCCESS })
    yield put(push('/dashboard'))
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_FAILURE })
  }
}

function* logout() {
  removeToken()
  yield put(push('/login'))
}

export function* loginWatcher() {
  yield takeLatest(AuthTypes.LOGIN_REQUESTED, login)
}

export function* logoutWatcher() {
  yield takeLatest(AuthTypes.LOGOUT, logout)
}
