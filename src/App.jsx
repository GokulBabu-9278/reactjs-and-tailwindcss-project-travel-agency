import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footers'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import About from './Pages/About'
import ScrollToTop from './Components/Scrolltotop'
// import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App