import React, { useEffect, useState } from 'react'
import "../style/Home.css"
import Sidebar from '../components/sidebar'
import CarCard from '../components/CarCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {
const [data,setData]=useState()
const [colour,setColour]=useState("")
const [price,setPrice]=useState("")
const [milage,setMilage]=useState("")
const navigate=useNavigate()


const getData=()=>{
  axios.get(`http://localhost:8080/market?colour=${colour}&price=${price}&milage=${milage}`)
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
},[colour,price,milage])
  return (
    <div className='homecontainer'>
      <div className='homebox1' >
        <div className='sidebar' >
        <div className='sidebarcontainer'>
        <div> 
            <span>Price:</span>
            <select onChange={(e)=>setPrice(e.target.value)} >
                <option>Select Price</option>
                <option value={1} >Low To High</option>
                <option value={-1} >High To Low</option>
            </select>
        </div>
        <div> 
            <div>Colour:</div>
            <div>
               <input type="checkbox" checked={colour==="red"} onChange={() => setColour("red")} />
               <span>Red</span>
            </div>
            <div>
               <input type="checkbox" checked={colour==="blue"}  onChange={() => setColour("blue")} />
               <span>Blue</span>
            </div>
            <div>
               <input type="checkbox" checked={colour==="green"}  onChange={() => setColour("green")} />
               <span>Green</span>
            </div>
            <div>
               <input type="checkbox" checked={colour==="pink"}  onChange={() => setColour("pink")} />
               <span>Pink</span>
            </div>
            <div>
               <input type="checkbox" checked={colour==="black"}  onChange={() => setColour("black")} />
               <span>Black</span>
            </div>
            <div>
               <input type="checkbox" checked={colour==="white"}  onChange={() => setColour("white")} />
               <span>White</span>
            </div>
        </div>
        
        <div> 
            <span>Mileage:</span>
            <select onChange={(e)=>setMilage(e.target.value)} >
                <option>Select Mileage</option>
                <option value="0-10" >0-10</option>
                <option value="10-20" >10-20</option>
                <option value="21ormore" >21 or more</option>
            </select>
        </div>
    </div>
        </div>
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