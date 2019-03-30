const INITIAL_STATE = {
  isLoading: false,
  all: []
}

interface User {
  id: number,
  email: string,
  password: string,
  role: string,
}

interface State {
  all?: Array<User>,
  isLoading?: boolean,
  [key :string]: any,
}

interface Action {
  type: string,
  [key :string]: any,
}

export default (state: State = INITIAL_STATE, action: Action) => {
  switch(action.type) {
    case 'GET_ALL_USERS_REQUESTED':
      return { ...state, isLoading: true }
    case 'GET_ALL_USERS_SUCCESS':
      return { ...state, all: action.payload, isLoading: false }
    default:
      return state
  }
}