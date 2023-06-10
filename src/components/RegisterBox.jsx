import React from 'react'

function RegisterBox() {
  return (
    <div className='logincontainer'>
        <div className='loginbox'>
            <h1>Register</h1>

            <form>
                <input type='name' placeholder='Name' />
                <br/>
                <input type='email' placeholder='Email' />
                <br/>
                <input type='password' placeholder='Password' />
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