

import { Toaster } from 'sonner'
import './App.css'

import BlogHome from './pages/home/BlogHome'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import HeroSection from './pages/home/HeroSection'




function App() {

  return (
    <>
        <Toaster richColors />
    <div>
        
      
    <Routes>
    
    <Route path="/" element={<BlogHome/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route  path="/hero" element={<HeroSection/>}/>
    <Route path="/signup" element={<BlogHome/>}/>
    </Routes>


    </div>
   </>
  )
}

export default App
