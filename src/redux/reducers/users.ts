import { UsersTypes } from '../types'
import { UserInterface } from '../../interfaces/user.interface'
import { ActionInterface } from '../../interfaces/action.interface'

export interface UsersInterface {
  readonly all: UserInterface[]
  readonly isLoading: boolean
}

const INITIAL_STATE = {
  isLoading: false,
  all: [],
}

export default (state: UsersInterface = INITIAL_STATE, action: ActionInterface) => {
  switch (action.type) {
    case UsersTypes.CREATE_USER_REQUESTED:
    case UsersTypes.UPDATE_USER_REQUESTED:
    case UsersTypes.DELETE_USER_REQUESTED:
    case UsersTypes.GET_ALL_USERS_REQUESTED:
      return { ...state, isLoading: true }
    case UsersTypes.GET_ALL_USERS_SUCCESS:
      return { ...state, all: action.payload, isLoading: false }
    case UsersTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id !== action.payload.id),
        isLoading: false,
      }
    case UsersTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((accumulator: UserInterface[], current: UserInterface) => {
          if (current.id === action.payload.user.id) {
            return [...accumulator, action.payload.user]
          }
          return [...accumulator, current]
        }, []),
        isLoading: false,
      }
    case UsersTypes.CREATE_USER_SUCCESS:
      return { ...state, all: state.all.concat(action.payload.user), isLoading: false }
    default:
      return state
  }
}
