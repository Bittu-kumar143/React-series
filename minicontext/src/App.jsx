import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import UserContext from './context/UserContext';
import Login from './components/Login'
import Profile from './components/Profile'

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
