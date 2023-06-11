import React from 'react'
import { useNavigate } from 'react-router-dom'

function CarCard({handleDelete,id,price,name,milage,max_speed,registration_place,no_previous_buyer,paint,no_of_accidents,scratches,image_url,distance_covered,year}) {
  
  const navigate=useNavigate()

  return (
    <div className='card'>
     <div className='imagebox' ><img src={image_url} alt='car image' /></div>
     <div className='cardbox' >
        <div><span>Car Id: {id}</span></div>
        <div><span> Name of the model: {name}</span></div>
        <div> <span>Year of Model: {year} </span></div>
        <div> <span> Price of the new vehicle: {price}</span></div>
        <div><span>Available Colors: {paint} </span></div>
        <div><span>Mileage: {milage} </span></div>
        <div> <span>Max Speed: {max_speed}</span></div> 
        <div> <span>KMs on Odometer: {distance_covered}</span></div> 
        <div> <span>Major Scratches: {scratches}</span></div> 
        <div> <span>Number of accidents: {no_of_accidents}</span></div> 
        <div> <span>Number of previous buyers: {no_previous_buyer}</span></div> 
        <div> <span>Registration Place: {registration_place} </span></div> 
        <div id='btn-area' >
          <button onClick={()=>navigate(`/update/${id}`)} >Edit</button>
          <button onClick={()=>handleDelete(id)} >Delete</button>
        </div>
     </div>
    </div>
  )
}

export default CarCard