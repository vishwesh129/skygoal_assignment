import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Login from './Components/Login'
import Details from './Components/Details'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/details' element={<Details />}/>
      </Routes>
    </div>
  )
}
