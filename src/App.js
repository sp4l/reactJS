import React from 'react'
import Router from './Components/Router/index'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Components/store'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App;
