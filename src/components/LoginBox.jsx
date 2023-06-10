import React from 'react'

function LoginBox() {
  return (
    <div className='logincontainer'>
        <div className='loginbox'>
            <h1>Login</h1>

            <form>
                <input type='email' placeholder='Email' />
                <br/>
                <input type='password' placeholder='Password' />
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