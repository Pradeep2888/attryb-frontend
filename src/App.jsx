import { useState } from 'react'
import './style/App.css'
import AllRoutes from './routes/AllRoutes'
import Navbar from './components/Navbar'

function App() {
  return (
 <div>
  <Navbar/>
  <AllRoutes/>
 </div>
  )
}

export default App
