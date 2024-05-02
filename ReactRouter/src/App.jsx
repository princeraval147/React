import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      {/* <Outlet /> */}
      <Footer />
    </>
  )
}

export default App
