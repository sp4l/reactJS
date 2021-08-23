import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ authed, ...rest }) => {
    return authed ? <Route {...rest} /> : <Redirect to="/login" />
}