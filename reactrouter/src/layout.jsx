import React from 'react'
import header from './components/header/header'
import footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
       <>
       <header/>
       <Outlet/>
       <footer/>
       </> 
    )
}

export default layout
