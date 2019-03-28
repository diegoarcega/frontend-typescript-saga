
interface Action {
  type: string,
  [propName: string]: any,
}

const reducer = (state = { articles: [] }, action: Action) => {
  switch(action.type) {
    case 'GET_NEWS':
      return { ...state, isLoading: true }
    case 'NEWS_RECEIVED':
      return { ...state, articles: action.articles, isLoading: false }
    default:
      return state
  }
}

export default reducer