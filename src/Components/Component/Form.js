import React from 'react'
import { AUTHOR } from '../../constants'
import { useInput } from '../utils/useInput'

const Form = ({ onSendMessage }) => {

    const { value, handleChange, reset } = useInput('')

    const handleSubmit = (event) => {
        event.preventDefault()

        onSendMessage({
            author: AUTHOR.human,
            text: value,
            id: Date.now(),
        })
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <input type='submit' />
        </form>
    )
}

export default Form