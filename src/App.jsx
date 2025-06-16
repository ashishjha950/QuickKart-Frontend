import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Beauty from './pages/Beauty'
import Accessories from './pages/Accessories'
import Electronics from './pages/Electronics'
import CategoryBar from './components/CategoryBar'
import Checkout from './pages/Checkout'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <CategoryBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/beauty' element={<Beauty />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App