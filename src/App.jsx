

import { Toaster } from 'sonner'
import './App.css'

import BlogHome from './pages/home/BlogHome'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import HeroSection from './pages/home/HeroSection'
import RegisterPage from './pages/auth/register'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUser } from './redux/slice/AuthSlice'
import EditBlog from './pages/edit/EditBlog'
import BlogDetailPage from './pages/details/BlogDetails'




function App() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (authState.isLoading) {
    return <p className="text-white">Loading</p>;
  }

  return (
    <>
    
      
    <div>
      
    <Toaster richColors />  
    <Routes>
    
    <Route path="/" element={<BlogHome/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route  path="/hero" element={<HeroSection/>}/>
    <Route path="/signup" element={<BlogHome/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path='/update-blogs/:id' element={<EditBlog/>}/>
    <Route path="/blog/:id" element={<BlogDetailPage />} />

    </Routes>


    </div>
   </>
  )
}

export default App
