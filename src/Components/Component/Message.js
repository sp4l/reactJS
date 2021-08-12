import React, {useContext} from 'react'
import { ThemeContext } from "../utils/ThemeContext"

const Message = ({ text, author }) => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme }}>
            {author}: {text}
        </div>
    )
}

export default Message