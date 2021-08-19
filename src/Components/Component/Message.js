import React, {useContext} from 'react'
import { useSelector } from 'react-redux'
import { AUTHOR } from '../../constants'
import { selectName } from '../store/selectors'
import { ThemeContext } from "../utils/ThemeContext"

const Message = ({ text, author }) => {
    const name = useSelector(selectName)
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme }}>
            {author === AUTHOR.human ? name : author}: {text}
        </div>
    )
}

export default Message