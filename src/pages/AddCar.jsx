import React, { useEffect, useState } from 'react'
import "../style/addcar.css"
import OemCard from '../components/OemCard'
import axios from 'axios'

function AddCar() {
const [data,setData]=useState()

const getData=()=>{
 axios.get("http://localhost:8080/oem")
 .then((r)=>{
  setData(r.data.oem)
 })
 .catch((err)=>{
  console.log(err)
 })
}

useEffect(()=>{
  getData()
})

  return (
    <div className='car' >
     <div><h1>Original Equipment Manufacturers</h1></div>
     <table className='oemcardarea' >
     <thead>
      <tr>
        <th>Name of the Model</th>
        <th> Year of Model</th>
        <th>Price</th>
        <th>Avilable Colors</th>
        <th>Milege</th>
        <th>Power (BHP)</th>
        <th>Max Speed</th>
        <th>Option</th>
      </tr>
      </thead>
      <tbody>
      {
        data?.map((item)=>{
          return <OemCard key={item._id} id={item._id} name={item.name} year={item.year} price={item.price} colour={item.colour} milage={item.milage} power={item.power} max_speed={item.max_speed} />
        })
      }
      </tbody>
     </table>
    </div>
  )
}

export default AddCar