import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Sidemenu from './Components/Sidemenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidemenu />
  </StrictMode>,
)