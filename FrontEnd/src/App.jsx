import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { konamiCodeFunc } from '../utils/konamiCode';

//COMPONENTS IMPORT
import Home from './components/Home.jsx';


function App() {

  const [kTest, setKTest] = useState('Nothing here!');


  useEffect(() => {
    document.addEventListener('keydown', konamiHandler, true)
  }, []);

  const konamiHandler = (e) => {
    if (konamiCodeFunc(e) === true) {
      setKTest("Never gonna give you up...");
    }
  }





  document.body.style.backgroundColor = 'rgb(31 41 55)'; //! perhaps don't keep this

  return (
    <>
      {/* <div className="bg-dark test" > */}
      <div className='bg-gray-800 text-red-500'>
        {/* <h1>PENDING!</h1> */}
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <h2>{kTest}</h2>
      </div >
    </ >
  )
}

export default App
