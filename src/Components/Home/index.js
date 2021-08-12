import './style.css';
import React, {useState, useEffect, useCallback} from 'react'
import MessageList from '../Component/MessageList'
import Form from '../Component/Form'
import AddChat from '../ChatList/index'
import { AUTHOR } from '../../constants';
import { useParams } from 'react-router-dom';

const initialChats = {
  chat1: {
    messages: [{text: 'text', author: AUTHOR.human, id: 'chat1-1'}],
    name: 'Chat 1',
    id: 'chat1',
  },
  chat2: {
    messages: [{text: 'text2', author: AUTHOR.human, id: 'chat2-1'}],
    name: 'Chat 2',
    id: 'chat2',
  },
  chat3: {
    messages: [],
    name: 'Chat 3',
    id: 'chat3',
  },
}

function Home() {
  const { chatId } = useParams()

  const [chats, setChats] = useState(initialChats)

  const handleSendMessage = useCallback(
    (newMessage) => {
      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage]
        }
      })
    },
    [chats, chatId]
  )

  useEffect(() => {
    if(
      !chatId ||
      !chats[chatId]?.messages.length || 
      chats[chatId].messages[chats[chatId].messages.length - 1].author === AUTHOR.robot
      ) {
      return
    }

    const timeout = setTimeout(() =>{
      const newMessage = {
        text: 'I am a robot',
        author: AUTHOR.robot,
        id: Date.now()
      }

      handleSendMessage(newMessage)
    }, 1000)

    return () => clearTimeout(timeout);
  }, [chats])

  return (
    <div className="chatList">
      <AddChat chats={chats}/>
      {!!chatId && <div>
          <Form onSendMessage={handleSendMessage} />
          <MessageList messages={chats[chatId].messages} />
      </div>}
    </div>
  );
}


export default Home;
