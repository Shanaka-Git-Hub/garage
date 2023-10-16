import React from 'react'
import Home from './Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ChangOpenClose from './settings/ChangOpenClose'

export default function App() {
  return (
    <div>
     <Router>
       <Routes>
         <Route path='/garage/' element={<Home/>}/>
         <Route path='/garage/openclose' element={<ChangOpenClose/>}/>
       </Routes>
     </Router>
    </div>
  )
}
