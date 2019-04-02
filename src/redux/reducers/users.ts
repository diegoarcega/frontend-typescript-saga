import { UsersTypes } from '../types'

export interface User {
  id: number,
  email: string,
  password: string,
  role: string,
}

export interface UsersState {
  readonly all: User[],
  readonly isLoading: boolean,
}

interface Action {
  type: string,
  [key :string]: any,
}

const INITIAL_STATE = {
  isLoading: false,
  all: [],
}

export default (state: UsersState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case UsersTypes.GET_ALL_USERS_REQUESTED:
      return { ...state, isLoading: true };
    case UsersTypes.GET_ALL_USERS_SUCCESS:
      return { ...state, all: action.payload, isLoading: false };
    default:
      return state;
  }
}
