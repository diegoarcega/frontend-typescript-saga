export enum AuthTypes {
  LOGIN_REQUESTED = '@auth/LOGIN_REQUESTED',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  LOGOUT = '@auth/LOGOUT',
}

export enum UsersTypes {
  GET_ALL_USERS_REQUESTED = '@users/GET_ALL_USERS_REQUESTED',
  GET_ALL_USERS_SUCCESS = '@users/GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE = '@users/GET_ALL_USERS_FAILURE',
}

export enum NewsTypes {
  GET_NEWS_REQUESTED = '@news/GET_NEWS_REQUESTED',
  GET_NEWS_SUCCESS = '@news/GET_NEWS_SUCCESS',
  GET_NEWS_FAILURE = '@news/GET_NEWS_FAILURE',
}
