import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"


import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/products/:id" element={<Product/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
