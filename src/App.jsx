

import { Toaster } from 'sonner'
import './App.css'
import Navbar from './components/NavBar'
import BlogHome from './pages/home/BlogHome'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'




function App() {

  return (
    <>
        <Toaster richColors />
    <div>
        
      
    <Routes>
    <Route path="/" element={<BlogHome/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>


    </div>
   </>
  )
}

export default App
