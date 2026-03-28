import React from 'react'
import { Route, Routes } from 'react-router'
import SessionList from '../screens/SessionList'
import CreateSession from '../screens/CreateSession'
import NotFound from '../screens/NotFound'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SessionList/>}/>
        <Route path='/create' element={<CreateSession/>}/>
        <Route path='/*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes