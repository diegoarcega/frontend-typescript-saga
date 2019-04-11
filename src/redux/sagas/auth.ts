import { put, takeLeading, all } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { authenticate, setToken, logout as removeToken } from '../../modules/services/auth.service'
import { AuthTypes } from '../types'
import { ActionInterface } from '../../interfaces/action.interface'

interface AuthenticateParams {
  email: string,
  password: string,
}

interface LoginActionInterface extends ActionInterface {
  payload: AuthenticateParams,
}

function* login(action: LoginActionInterface) {
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

export function* authWatcher() {
  yield all([
    yield takeLeading(AuthTypes.LOGIN_REQUESTED, login),
    yield takeLeading(AuthTypes.LOGOUT, logout),
  ])
}
