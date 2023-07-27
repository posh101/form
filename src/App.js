import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/login'
//import Route from './components/routes'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App