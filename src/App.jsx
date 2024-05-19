import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CartProvider } from './storage/CartContext.jsx';
import { CurrentUserProvider } from './storage/CurrentUserContext.jsx';
import { useTheme } from './storage/ThemeContext.jsx';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import Cart from './components/Cart.jsx';
import About from './components/About.jsx';
import NewProduct from './components/NewProduct.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import Search from './components/Search.jsx';

const App = () => {
    const { theme } = useTheme()

    return (
        <CurrentUserProvider>
            <CartProvider>
                <Router>
                    <div className={`App ${theme}`}>
                        <Header />
                        <main>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/products' element={<Products />} />
                                <Route path='/products/:id' element={<Card />} />
                                <Route path='/search/:search' element={<Search />} />
                                <Route path='/cart' element={<Cart />} />

                                {/* Rutas protegidas */}
                                <Route path='/products/:id/update' element={<UpdateProduct />} />
                                <Route path='/new' element={<NewProduct />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </CurrentUserProvider>
    )
};

export default App;