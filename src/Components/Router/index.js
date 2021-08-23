import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Profile from '../Profile/index'
import Home from '../Home/index'
import { ThemeContext } from "../utils/ThemeContext"
import './style.css'
import { News } from '../News/News'
import { NewsFootball } from '../NewsFootball/NewsFootball'
import { PrivateRoute } from '../hocs/PrivateRoute'
import { PublicRoute } from '../hocs/PublicRoute'
import { Login } from '../Login/index'

const Router = () => {
    const [bgColor, setBgColor] = useState("white")
    const changeColor = () => {
        setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"))
    }

    const [isAuthed, setIsAuthed] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsAuthed(true)
            } else {
                setIsAuthed(false)
            }
        })
    }, [])

    return (
        <ThemeContext.Provider value={bgColor}>
            <BrowserRouter>
                <ul>
                    <li style={{ backgroundColor: bgColor}}>
                        <Link to='/home'>HOME</Link>
                    </li>
                    <li style={{ backgroundColor: bgColor}}>
                        <Link to='/profile'>PROFILE</Link>
                    </li>
                    <li style={{ backgroundColor: bgColor}}>
                        <Link to='/news'>NEWS</Link>
                    </li>
                    {/* <li style={{ backgroundColor: bgColor}}>
                        <Link to='/football'>FOOTBALL</Link>
                    </li> */}
                </ul>
                <button className="but" onClick={changeColor}>CHANGE COLOR</button>

                <Switch>
                    <PrivateRoute authed={isAuthed} path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute authed={isAuthed} path="/home/:chatId?">
                        <Home />
                    </PrivateRoute>
                    <PublicRoute path="/news">
                        <News />
                    </PublicRoute>
                    {/* <PublicRoute path="/football">
                        <NewsFootball />
                    </PublicRoute> */}
                    <PrivateRoute authed={isAuthed} path="/nochat">
                        <h1>No such chat</h1>
                        <Link to="/home">HOME</Link>
                    </PrivateRoute>
                    <Route path="/" exact>
                        <h1>WELCOME</h1>
                    </Route>
                    <PublicRoute authed={isAuthed} path="/login" exact>
                        <Login />
                    </PublicRoute>
                    <PublicRoute authed={isAuthed} path="/signup" exact>
                        <Login isSignUp />
                    </PublicRoute>
                    <Route path="*">
                        404
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default Router