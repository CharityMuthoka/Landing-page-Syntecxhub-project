import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AllServices from './pages/Home'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

export default function App(){
  return(
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/services" element={<ServicesPage />}>
    <Route index element={<AllServices />} />
    
  <Route path="/services" element={<services />} />
  <Route path="/services/:category" element={<services />} />

  
  </Route>
    </Routes>
    <Footer/>
    </>
  )
}