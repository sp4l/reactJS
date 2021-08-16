import React, {useState, useCallback} from 'react'
import Button from '../Button/index'
import { List, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AddChat } from './AddChat'

const Chats = ({chats}) => {
    return (
        <>
            <List>
                {Object.values(chats).map((c) => (
                    <ListItem key={c.id}>
                        <Link to={`/home/${c.id}`}>{c.name}</Link>
                    </ListItem>
                ))}
                <ListItem>
                    <AddChat />
                </ListItem>
            </List>
        </>
    )
}

// const AddChat = (props) => {
//     //console.log(props)
//     const [chats, setChats] = useState([
//         {
//             name: 'Chat 1',
//             id: 'chat1',
//         },
//         {
//             name: 'Chat 2',
//             id: 'chat2',
//         },
//     ])

//     // const handleSendMessage = useCallback((newMessage) => {
//     //     setMessages([...messages, newMessage])
//     //   }, [messages]);


//     const addNewChat = (e) => {
//         e.preventDefault();
//         console.log(chats)
//     }

//     // const handleSubmit = (event) => {
//     //     event.preventDefault()
//     //     addNewChat({
//     //         name: chats.name,
//     //         id: chats.id,
//     //     })
//     // }

//     return (
//         <div>
//             <Button onClick={addNewChat}>Добавить чат</Button>
//             <ChatList chats={chats} />
//         </div>
//     )
// }

export default Chats