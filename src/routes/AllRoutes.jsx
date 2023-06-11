import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CarUpdate from '../pages/CarUpdate'
import AddCar from '../pages/AddCar'
import SingleCar from '../pages/SingleCar'
import PrivateRoute from '../components/PrivateRoute'
import AddCarDetail from '../pages/AddCarDetail'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}  />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/update' element={<CarUpdate/>} />
            <Route path='/add-car' element={<AddCar/>} />
            <Route path='/add-car/detail/:id' element={<AddCarDetail/>} />
            <Route path='/single-car' element={<SingleCar/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes