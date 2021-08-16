import React, {useState} from 'react'
import { AUTHOR } from '../../constants'

const Form = ({ onSendMessage }) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSendMessage({
            author: AUTHOR.human,
            text: value,
            id: Date.now(),
        })
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type='submit' />
        </form>
    )
}

export default Form