import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'

function App() {
  
  return (
    <UserContext.Provider>
    <h1>react with Bittu</h1>
    <Login/>
    <Profile/>
    </UserContext.Provider>
  )
}

export default App
