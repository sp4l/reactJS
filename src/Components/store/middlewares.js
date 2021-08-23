import { ADD_CHAT, SEND_MESSAGE } from './chats/actionTypes'
import { addChat, sendMessage } from './chats/actions'
import { AUTHOR } from '../../constants'

export const middleware = (store) => (next) => (action) => {
    console.log(action.type)

    if (
        action.type === SEND_MESSAGE && 
        action.payload.message.author !== AUTHOR.robot
    ) {
        setTimeout(() => {
            store.dispatch(
                sendMessage(action.payload.chatId, {
                    text: 'generated', 
                    author: AUTHOR.robot
                })
            )
        }, 1000)
    }
    
    return next(action)
}