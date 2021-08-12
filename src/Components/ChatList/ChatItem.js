import React from 'react';
import {List, ListItem} from "@material-ui/core"
import { Link } from 'react-router-dom'

const ChatItem = (props) => {
    console.log(props)
    return (
        <List>
            <ListItem key={props.chat.id}>
                <Link to={`/home/${props.chat.id}`}>{props.chat.name}</Link>
            </ListItem>
        </List>
    )
}

export default ChatItem