import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextPorvider } from './Context/ContextProvider'
import './index.css'
import router from './router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextPorvider>
      <RouterProvider router = {router} />
    </ContextPorvider>
  </React.StrictMode>
)
