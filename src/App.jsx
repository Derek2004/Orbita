import { useState } from 'react'
import Navbar from './components/Navbar'
import SlidingBanners from './components/SlidingBanners'
import Products from './components/Products'
import About from './components/About'
import Clients from './components/Clients'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
   <SlidingBanners /> 
   <Products />
   <About />
   <Clients />
    </>
  )
}

export default App
