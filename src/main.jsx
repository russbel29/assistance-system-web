import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AssistenceSistemApp } from './AssistenceSistemApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssistenceSistemApp />
  </StrictMode>,
)
