import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* To use Typescript, change files extencions to .tsx,
and set this:

createRoot(document.getElementById('root')!).render(    */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
