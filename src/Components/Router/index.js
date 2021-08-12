import React, {useState} from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Profile from '../Profile/index'
import Home from '../Home/index'
import { ThemeContext } from "../utils/ThemeContext"

const Router = () => {
    const [bgColor, setBgColor] = useState("white")
    const changeColor = () => {
        setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"))
    }

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
                </ul>
                <button onClick={changeColor}>CHANGE COLOR</button>

                <Switch>
                    <Route path="/" exact>
                        <h1>WELCOME</h1>
                    </Route>
                    <Route path="/home/:chatId?"><Home /></Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="*">
                        404
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default Router