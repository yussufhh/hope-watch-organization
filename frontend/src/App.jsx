
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'

function App() {
  return (
    <div>
    <Navbar/>
      <Home />
      <Footer />
      <About/>

    </div>
  )
}

export default App