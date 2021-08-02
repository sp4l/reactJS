import React from 'react'

export default function Message(props) {
    return (
        <div>
            <h1 className="Message">Hello, {props.name}!</h1>
        </div>
    )
}
Message.defaultProps = { name: "World"}
