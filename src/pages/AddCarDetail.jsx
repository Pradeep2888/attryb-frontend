import React, { useState } from 'react'
import "../style/addcardetail.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function AddCarDetail() {

    const [state, setState] = useState({})
 const navigate=useNavigate()
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value.toLowerCase() });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
      getData(state)
  }
    const {id}=useParams()
  const  getData=(state)=>{
  axios.post(`https://attryb-backend.onrender.com/market/add/${id}`,state)
  .then((r)=>{
    alert(r.data.msg)
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
                        <input placeholder='KMs on Odometer' name='distance_covered'  required onChange={handleChange} type='number' />
                    </div>
                    <div>
                        <span>Major Scratches: </span>
                        <input placeholder='Major Scratches' name='scratches' type='number'  required onChange={handleChange}  />
                    </div>
                  </div>
                  <div className='acd-row' >
                    <div>
                        <span>Original Paint:  </span>
                        <input placeholder='Original Paint' name='paint' type='text'  required onChange={handleChange} />
                    </div>
                    <div>
                        <span>Number of accidents: </span>
                        <input placeholder='Number of accidents' name='no_of_accidents' type='number'  required onChange={handleChange} />
                    </div>
                  </div>
                  <div className='acd-row' >
                    <div>
                        <span>Number of previous buyers:  </span>
                        <input placeholder='Number of previous buyers' name='no_previous_buyer' type='number'  required onChange={handleChange} />
                    </div>
                    <div>
                        <span> Registration Place: </span>
                        <input placeholder=' Registration Place' name='registration_place' type='text'  required onChange={handleChange} />
                    </div>
                  </div>
                  <div className='acd-row' >
                    <div>
                        <span>Image URL:  </span>
                        <input placeholder='Image URL' name='image_url' type='url'  required onChange={handleChange} />
                    </div>
                    <div>
                        <span>discription: </span>
                        <input placeholder='Brief discription' className='biscription' name='discription' type='text'  required onChange={handleChange} />
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

export default AddCarDetail