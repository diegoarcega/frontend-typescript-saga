import { Reducer } from 'redux'
import { AuthTypes } from '../types'
import { hasToken } from '../../modules/services/auth.service'
import { ActionInterface } from '../../interfaces/action.interface'

export interface AuthInterface {
  readonly isAuthenticated: boolean
  readonly isLoading: boolean
  readonly isError: boolean
}

const INITIAL_STATE: AuthInterface = {
  isLoading: false,
  isError: false,
  isAuthenticated: hasToken(),
}

const reducer: Reducer = (state: AuthInterface = INITIAL_STATE, action: ActionInterface) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUESTED:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        isError: false,
      }
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isLoading: false }
    case AuthTypes.LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case AuthTypes.LOGOUT:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}

export default reducer
