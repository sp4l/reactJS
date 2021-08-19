import { AUTHOR, REQUEST_STATUS } from "../../constants"

export const selectName = (state) => state.profile.name || AUTHOR.human

export const selectChats = (state) => state.chats

export const selectArticles = (state) => state.articles.data

export const selectArticlesFootball = (state) => state.articles.data.response

export const selectArticlesLoading = (state) =>
 state.articles.request.status === REQUEST_STATUS.PENDING

export const selectArticlesError = (state) => state.articles.request.error