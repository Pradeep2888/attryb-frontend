import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  const token=JSON.parse(localStorage.getItem("token")) || ""
  
  useEffect(()=>{
    // console.log(token)
  },[])

  const handleLogout=()=>{
    window.localStorage.setItem("token", JSON.stringify(""))
    navigate("/login")
  }
  
  return (
    <div className='navbar-container'>
      <div className='navbox1' >
         <div><a href='/'>BUYC Corp</a></div>
      </div>
      <div className='navbox2' >
        <div><a href='/'>Home</a></div>
        <div><a href='/add-car'>Add Car</a></div>
        {
          token===""?<div onClick={()=>navigate("/register")} ><a >Register</a></div>:""
        }
        {
          token===""? <div onClick={()=>navigate("/login")} ><a >Login</a></div>:<div onClick={handleLogout} ><a >Logout</a></div>
        }
      </div>
    </div>
  )
}

export default Navbar