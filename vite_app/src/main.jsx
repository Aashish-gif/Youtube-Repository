import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Sidemenu from './Components/Sidemenu.jsx'
import Mainmenu from './Components/Mainmenu.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <div id="box">
      <Sidemenu />
    <Mainmenu />
    </div>

   </StrictMode> 
)
