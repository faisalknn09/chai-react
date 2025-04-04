import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/home/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './component/header/about.jsx'
import Contact from './component/header/contact.jsx'
import Github from './component/header/github.jsx'

const router=createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"github",
      element:<Github/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
