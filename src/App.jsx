import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mail from './components/Mail'
import Body from './components/Body'
import Inbox from './components/Inbox'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Inbox/>
      },
      {
        path:'/mail/:id',
        element:<Mail/>
      }
    ]
  }
])
const App = () => {
  return (
    <div className=' bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App