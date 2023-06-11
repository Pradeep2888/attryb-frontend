import React, { useEffect, useState } from 'react'
import "../style/Home.css"
import Sidebar from '../components/sidebar'
import CarCard from '../components/CarCard'
import axios from 'axios'

function Home() {
const [data,setData]=useState()

const getData=()=>{
  axios.get("http://localhost:8080/market")
  .then((r)=>{
    setData(r.data.market_car)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const handleDelete=(id)=>{
  axios.delete(`http://localhost:8080/market/delete/${id}`)
  .then((r)=>{
    alert(r.data.msg)
    getData()
  })
  .catch((err)=>{
    console.log(err)
  })
}

useEffect(()=>{
getData()
},[])
  return (
    <div className='homecontainer'>
      <div className='homebox1' >
        <div className='sidebar' ><Sidebar/></div>
        <div className='plot'>
          {
            data?.map((item)=><CarCard handleDelete={handleDelete} distance_covered={item.distance_covered} image_url={item.image_url} scratches={item.scratches} paint={item.paint} id={item._id} key={item._id} no_of_accidents={item.no_of_accidents} no_previous_buyer={item.no_previous_buyer} registration_place={item.registration_place} name={item.name} milage={item.milage} max_speed={item.max_speed} year={item.year}  price={item.price}       />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home