import { NewsTypes } from '../types'

interface Action {
  type: string,
  [propName: string]: any,
}

const reducer = (state = { articles: [] }, action: Action) => {
  switch (action.type) {
    case NewsTypes.GET_NEWS_REQUESTED:
      return { ...state, isLoading: true }
    case NewsTypes.GET_NEWS_SUCCESS:
      return { ...state, articles: action.articles, isLoading: false }
    default:
      return state
  }
}

export default reducer
