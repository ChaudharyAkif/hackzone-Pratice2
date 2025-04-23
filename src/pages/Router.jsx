import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Frontend from './Frontend/Frontend'
import Auth from './Auth/Auth'
// import { useAuthContext } from '../context/Auth'

const Index = () => {
  // const {isAuth}=useAuthContext()
  return (
    <>
    <Header />
    <main>
    <Routes>
      <Route  path='/*' element={<Frontend />}/>
      <Route  path='/auth/*' element={<Auth />}/>
      {/* <Route  path='/auth/*' element={!isAuth ? <> <Auth /></> :<Navigate to={"/"}/> }/> */}
      <Route  path='*' element={<h1>Page NOt Found</h1>}/>
    </Routes>
    </main>
    <Footer />
    </>
  )
}

export default Index
