import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Appredirect from './Appredirect.jsx'
import './styles.css'

{}
{if ((window.location.hostname == "academy.prmitr.in") || (window.location.hostname == "studious-barnacle-gjpvq4grx7r3pvjx-5173.app.github.dev")){
  
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
) }

else {
  createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Appredirect />
    </BrowserRouter>
  </React.StrictMode>)
}
}
