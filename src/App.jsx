import { useContext, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MeuProvedor from './context/MeuProvedor'


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
