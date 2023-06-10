import React from 'react'

function AddCarBox() {
  return (
    <div className='carcontainer'>
    <div className='carbox'>
        <h1>Add Car Details</h1>

        <form>
            <input type='name' placeholder='Name' />
            <br/>
            <input type='email' placeholder='Email' />
            <br/>
            <input type='password' placeholder='Password' />
            <br/>
            <div>
            <input type='submit' value={"Add a Car"} className='loginbutton' />
            </div>
        </form>

    </div>
</div>
  )
}

export default AddCarBox