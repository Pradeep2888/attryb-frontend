import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function CarUpdate() {
  const [state, setState] = useState({})
const [data,setData]=useState()
 const navigate=useNavigate()
 const {id}=useParams()

 const getData=()=>{
  axios.get(`http://localhost:8080/market/single-data/${id}`)
  .then((r)=>{
     setData(r.data.car[0])
     setState({...state,distance_covered:r.data.car[0].distance_covered,discription:r.data.car[0].discription,image_url:r.data.car[0].image_url ,no_of_accidents:r.data.car[0].no_of_accidents ,no_previous_buyer:r.data.car[0].no_previous_buyer,paint:r.data.car[0].paint,registration_place:r.data.car[0].registration_place,scratches:r.data.car[0].scratches})
     
  })
  .catch((err)=>{
      console.log(err)
  })
}
useEffect(()=>{
  getData() 
},[])



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value.toLowerCase() });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    updateData(state)
  }
   
  const updateData=(formData)=>{
    axios.patch(`http://localhost:8080/market/update/${id}`,formData)
    .then((r)=>{
       if(r.data==="update successfully"){
           alert("Updated Successfully")
           navigate("/")
       }
       else{
           alert("Some Thing Went Wrong")
           navigate("/")
       }
      console.log(r)
    })
    .catch((e)=>{
       console.log(e)
    })
   }

  return (
    <div className='acd-container' >
    <div className='acd-area'>
      <h1>Add Second Hand Car detail</h1>
       
       <form onSubmit={handleSubmit}>
           <div className='acd-row' >
             <div>
                 <span>KMs on Odometer:  </span>
                 <input placeholder='KMs on Odometer' name='distance_covered' value={state.distance_covered || ""}  required onChange={handleChange} type='number' />
             </div>
             <div>
                 <span>Major Scratches: </span>
                 <input placeholder='Major Scratches' name='scratches' value={state.scratches || ""} type='number'  required onChange={handleChange}  />
             </div>
           </div>
           <div className='acd-row' >
             <div>
                 <span>Original Paint:  </span>
                 <input placeholder='Original Paint' name='paint' type='text' value={state.paint || ""}  required onChange={handleChange} />
             </div>
             <div>
                 <span>Number of accidents: </span>
                 <input placeholder='Number of accidents' name='no_of_accidents' type='number' value={state.no_of_accidents || ""}  required onChange={handleChange} />
             </div>
           </div>
           <div className='acd-row' >
             <div>
                 <span>Number of previous buyers:  </span>
                 <input placeholder='Number of previous buyers' name='no_previous_buyer' type='number' value={state.no_previous_buyer || ""}  required onChange={handleChange} />
             </div>
             <div>
                 <span> Registration Place: </span>
                 <input placeholder=' Registration Place' name='registration_place' type='text' value={state.registration_place || ""}  required onChange={handleChange} />
             </div>
           </div>
           <div className='acd-row' >
             <div>
                 <span>Image URL:  </span>
                 <input placeholder='Image URL' name='image_url' type='url' value={state.image_url || ""}  required onChange={handleChange} />
             </div>
             <div>
                 <span>discription: </span>
                 <input placeholder='Brief discription' className='biscription' value={state.discription || ""} name='discription' type='text'  required onChange={handleChange} />
             </div>
           </div>
           <div className='acd-row' >
             <div>
                
                 <input type='submit' value='Submit Car Detail' className='submit-detail' />
             </div>
           </div>
          
            
       </form>

    </div>
</div>
  )
}

export default CarUpdate