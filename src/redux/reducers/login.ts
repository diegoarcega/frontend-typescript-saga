import { Reducer } from 'redux'
import { AuthTypes } from '../types'

export interface State {
  readonly isAuthenticated: boolean,
  readonly isLoading: boolean
}

interface Action {
  type: string,
  [propName: string]: any,
}

const INITIAL_STATE: State = {
  isLoading: false,
  isAuthenticated: false,
}

const reducer: Reducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUESTED:
      return { ...state, isAuthenticated: false, isLoading: true }
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, isLoading: false }
    case AuthTypes.LOGOUT:
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}

export default reducer
