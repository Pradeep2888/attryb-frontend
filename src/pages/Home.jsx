import React from 'react'
import "../style/Home.css"
import Sidebar from '../components/sidebar'

function Home() {
  return (
    <div className='homecontainer'>
      <div className='home-navbar' >
        <div className='hnb1'>
          <input type='text' />
        </div>
        <div className='hnb2'><p>Delar id:1234567879789456123</p></div>
      </div>
      <hr></hr>
      <div className='homebox1' >
        <div className='sidebar' ><Sidebar/></div>
        <div className='plot'> gfhgfbvcbcv</div>
      </div>
    </div>
  )
}

export default Home