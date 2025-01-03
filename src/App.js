
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />}/>
            </Route>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<LoginSignup />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
