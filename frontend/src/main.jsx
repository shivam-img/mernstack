import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Providers from './providers/Providers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>
)
