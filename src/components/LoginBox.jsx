import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginBox() {
  const [state, setState] = useState({ email: '', password: "" })
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
    const tokyo=JSON.parse(localStorage.getItem("token")) || ""
    axios.post(`http://localhost:8080/login/user`,state)
    .then((r)=>{
      window.localStorage.setItem("token", JSON.stringify(r.data.token))
      navigate("/")
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div className='logincontainer'>
        <div className='loginbox'>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' name='email' required onChange={handleChange} />
                <br/>
                <input type='password'  placeholder='Password' required name='password' onChange={handleChange} />
                <br/>
                <div>
                <input type='submit' value={"Login"} className='loginbutton' />
                </div>
            </form>

        </div>
    </div>
  )
}


export default LoginBox