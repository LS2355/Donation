import { useState } from 'react'
import HomePage from './components/Home'
import Navbar from './components/navbar'
import Login from './components/Login'
import CreateCause from './components/CreateCause'
import FindCauses from './components/FindCauses'
import { Routes, Route } from 'react-router-dom'
import './styles/index.css'


function App() {

  const [loginFormActive, setLoginFormActive] = useState<boolean>(false)
  const [loggedIn, setLoggedIn] = useState<boolean>(true)
  return (
    <main className='relative flex flex-wrap justify-center w-full'>
      {loginFormActive ? 
      <Login
      setLoginFormActive = {setLoginFormActive}
      /> 
      : ""}
      <Navbar 
      setLoginFormActive = {setLoginFormActive}
      loggedIn = {loggedIn}
      setLoggedIn = {setLoggedIn}
      />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Find-Cause' element={<FindCauses/>} />
        <Route path='/Create-Cause' element={<CreateCause />} />
      </Routes>
    </main>
  )
}

export default App
