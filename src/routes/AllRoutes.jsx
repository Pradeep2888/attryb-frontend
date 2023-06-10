import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CarUpdate from '../pages/CarUpdate'
import AddCar from '../pages/AddCar'
import SingleCar from '../pages/SingleCar'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/update' element={<CarUpdate/>} />
            <Route path='/add-car' element={<AddCar/>} />
            <Route path='/single-car' element={<SingleCar/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes