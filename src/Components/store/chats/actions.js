import { AUTHOR } from '../../../constants'
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from './actionTypes'

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    }
})

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
})

export const sendMessageWidthReply = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message))

    setTimeout (() => {
        dispatch(
            sendMessage(chatId, { author: AUTHOR.robot, text: 'Message from thunk' })
        );
    }, 1000)
}