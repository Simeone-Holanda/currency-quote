import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Dashboard from './components/pages/dashboard/Dashboard'
import NavTop from './components/layout/NavTop/NavTop'


function App() {

  return (
    <>
      <NavTop />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
