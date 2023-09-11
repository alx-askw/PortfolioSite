import { useState } from 'react'
import './App.css'
import {Route, Routes, Navigate} from 'react-router-dom';

//COMPONENTS IMPORT
import Home from './components/Home.jsx';


function App() {

  return (
    <>
    <div className="bg-dark test">
      <h1>PENDING!</h1>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
