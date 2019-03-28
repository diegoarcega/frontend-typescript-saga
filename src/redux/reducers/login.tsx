
interface Action {
  type: string,
  [propName: string]: any,
}

const reducer = (state = {}, action: Action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: false, isLoading: true }
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, isLoading: false }
    case 'LOGOUT':
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}

export default reducer