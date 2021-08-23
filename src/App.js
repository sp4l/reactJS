import React from 'react'
import Router from './Components/Router/index'
import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from './Components/store'
import { PersistGate } from 'redux-persist/lib/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App;
