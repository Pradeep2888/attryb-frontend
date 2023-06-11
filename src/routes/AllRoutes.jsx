import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CarUpdate from '../pages/CarUpdate'
import AddCar from '../pages/AddCar'
import PrivateRoute from '../components/PrivateRoute'
import AddCarDetail from '../pages/AddCarDetail'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}  />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/update/:id' element={<PrivateRoute><CarUpdate/></PrivateRoute>} />
            <Route path='/add-car' element={<PrivateRoute><AddCar/></PrivateRoute>} />
            <Route path='/add-car/detail/:id' element={<PrivateRoute><AddCarDetail/></PrivateRoute>} />
        </Routes>
    </div>
  )
}

export default AllRoutes