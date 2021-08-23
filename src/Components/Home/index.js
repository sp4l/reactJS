import './style.css';
import React, { useCallback, useEffect, useState } from 'react'
import firebase from 'firebase'
import MessageList from '../Component/MessageList'
import Form from '../Component/Form'
import Chats from '../ChatList/index'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, sendMessageWidthReply } from '../store/chats/actions';
import { selectChats } from '../store/selectors';

const db = firebase.database()

function Home() {
  const { chatId } = useParams()
  const history = useHistory()

  const [chats, setChats] = useState({})

  useEffect(() => {
    db.ref().on("value", (snapshot) => {
      console.log(snapshot)
      let newChats = {}
      snapshot.forEach((snap) => {
        const currentChat = snap.val()
        newChats[currentChat.id] = currentChat
      })
      setChats(newChats)
    })
  }, [])

  const addChat = (id, name) => {
    db.ref().child(id).set({
      name,
      id,
    })
  }
  // const chats = useSelector(selectChats)
  const dispatch = useDispatch()

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWidthReply(chatId, newMessage));
    },
    [chatId]
  )

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id))
  }, [])

  if(!!chatId && !chats[chatId]) {
//    return <Redirect to='/nochat' />
    history.replace('/nochat')
  }

  return (
    <div className="chatList">
      <Chats chats={chats} onDeleteChat={handleDeleteChat} onAddChat={addChat} />
      {!!chatId && chats[chatId] && (
        <div>
          <Form onSendMessage={handleSendMessage} />
          {/* <MessageList messages={chats[chatId].messages} /> */}
        </div>
      )}
    </div>
  );
}


export default Home;
