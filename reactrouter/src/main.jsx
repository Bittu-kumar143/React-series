import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import layout from './layout.jsx'
import home from './components/home/home.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <layout/>,
    children: [
      {
        path: "",
        element: <home/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
