import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ClerkProvider} from '@clerk/react'

const Publishable_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!Publishable_Key){
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={Publishable_Key}>
      <App />
    </ClerkProvider>
  </BrowserRouter>,
)
