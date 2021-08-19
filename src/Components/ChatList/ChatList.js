import React from 'react'
import ChatItem from './ChatItem'

const ChatList = (props) => {
    //console.log(props)
    return (
        <div>
            {props.chats.map((chat, index) => 
                <ChatItem number={index + 1} chat={chat} key={chat.id}/>
            )}
        </div>
    )
}

export default ChatList