import './style.css';
import React, {useState, useEffect, useCallback} from 'react'
import MessageList from '../Component/MessageList'
import Form from '../Component/Form'
import Chats from '../ChatList/index'
import { AUTHOR } from '../../constants';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../store/chats/actions';
import { selectChats } from '../store/selectors';

function Home() {
  const { chatId } = useParams()

  const chats = useSelector(selectChats)
  const dispatch = useDispatch()

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessage(chatId, newMessage));
    },
    [chatId]
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
        text: 'Привет',
        author: AUTHOR.robot,
        id: Date.now()
      }

      handleSendMessage(newMessage)
    }, 1000)

    return () => clearTimeout(timeout);
  }, [chats])

  return (
    <div className="chatList">
      <Chats chats={chats}/>
      {!!chatId && <div>
          <Form onSendMessage={handleSendMessage} />
          <MessageList messages={chats[chatId].messages} />
      </div>}
    </div>
  );
}


export default Home;
