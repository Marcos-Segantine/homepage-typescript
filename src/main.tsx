import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Header } from './shared/header'
import { Footer } from './shared/footer'

import './css/base.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
)
