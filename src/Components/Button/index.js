import React from 'react';
import './styles.css';

const Button = ({children, ...props}) => {
    return (
        <div {...props} className="button">
            {children}
        </div>
    )
}

export default Button