import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Route, Routes } from 'react-router-dom'
import Authroute from "./routes/Authroute"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Protectedroute from "./routes/Protectedroute"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/products/:id" element={<Product/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route element = {<Protectedroute/>}>
          <Route path="/account" element={<Logout/>}/>
        </Route>
        <Route element={<Authroute/>}>
          <Route path="/signin" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
