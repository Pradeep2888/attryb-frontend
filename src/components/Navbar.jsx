import React from 'react'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbox1' >
         <div><a href='/'>BUYC Corp</a></div>
      </div>
      <div className='navbox2' >
        <div><a href='/'>Home</a></div>
        <div><a href='/add-car'>Add Car</a></div>
        <div><a href='/register'>Register</a></div>
        <div><a href='login'>Login</a></div>
      </div>
    </div>
  )
}

export default Navbar