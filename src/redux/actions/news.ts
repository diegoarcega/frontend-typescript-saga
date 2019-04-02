import { NewsTypes } from '../types'

export const getNews = () => ({
  type: NewsTypes.GET_NEWS_REQUESTED,
})
