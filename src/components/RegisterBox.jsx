import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterBox() {

  const [state, setState] = useState({email:"",password:"",name:"",mobile:0,user_type:"dealer"})
 const navigate=useNavigate()
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.email === "" || state.password === "") {
      alert("Please Fill All Details")
    }
    else {
      getData(state)
    }
  }
    
  const  getData=(state)=>{
    axios.post(`https://attryb-backend.onrender.com/register/add-user`,state)
    .then((r)=>{
      if(r.data.msg==="User already exists"){
        alert(r.data.msg)
        navigate("/login")
      }
     navigate("/login")
    })
    .catch((e)=>{
      console.log(e)
    })
  }


  return (
    <div className='logincontainer'>
        <div className='loginbox'>
            <h1>Register</h1>

            <form onSubmit={handleSubmit} >
                <input type='name' placeholder='Name' name='name' required onChange={handleChange} />
                <br/>
                <input type='email' placeholder='Email' name='email' required onChange={handleChange} />
                <br/>
                <input type='password' placeholder='Password' name='password' required onChange={handleChange} />
                <br/>
                <input type="number" maxLength={10} placeholder='Password' name='mobile' required onChange={handleChange} />
                <br/>
                <div>
                <input type='submit' value={"Register"} className='loginbutton' />
                </div>
            </form>

        </div>
    </div>
  )
}

export default RegisterBox