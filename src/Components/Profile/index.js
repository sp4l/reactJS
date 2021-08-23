import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName } from '../store/profile/actions'
import { selectName } from '../store/selectors'

const Profile = () => {
    const [value, setValue] = useState('')
    const name = useSelector(selectName)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeName(value))
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    return (
        <>
            <h2>THIS IS A PROFILE OF {name}</h2>
            <form action="" onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange}/>
                <button onClick={handleSubmit}>Save name</button>
            </form>
        </>
    )
}

export default Profile