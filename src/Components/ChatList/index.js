import React, {useState, useCallback} from 'react'
import ChatList from './ChatList'

const AddChat = () => {
    const [chats, setChats] = useState(
        [{
            name: 'Chat 1',
            id: 'chat1',
        },
        {
            name: 'Chat 2',
            id: 'chat2',
        },
    ])

    // const handleSendMessage = useCallback((newMessage) => {
    //     setMessages([...messages, newMessage])
    //   }, [messages]);


    const addNewChat = useCallback((newChat) => {
        setChats([...chats, newChat])
    }, [chats]);

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     addNewChat({
    //         name: chats.name,
    //         id: chats.id,
    //     })
    // }

    return (
        <div>
            <button onClick={addNewChat}>Добавить чат</button>
            <ChatList chats={chats} />
        </div>
    )
}

export default AddChat