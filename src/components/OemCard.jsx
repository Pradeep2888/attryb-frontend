import React from 'react'
import { useNavigate } from 'react-router-dom'

function OemCard({id,name,year,price,colour,max_speed,power,milage}) {
      const navigate=useNavigate()
      const handleClick=(id)=>{
       navigate(`/add-car/detail/${id}`)
      }

    return (
 <tr>
    <td>{name}</td>
    <td>{year}</td>
    <td>{price}</td>
    <td className='colour'>{colour.map((item)=><p >{item},</p>)}</td>
    <td>{milage} Km/h</td>
    <td>{power}</td>
    <td>{max_speed} Km/hr</td>
    <td><button className='select' onClick={()=>handleClick(id)} >Select</button></td>
    
  </tr>
  )
}

export default OemCard