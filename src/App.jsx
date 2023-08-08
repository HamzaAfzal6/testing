import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Products from './Components/Products'
import Signup from './Components/Signup'

function App() {
  

  return (
    <>  
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
