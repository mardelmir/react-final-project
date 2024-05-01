import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CurrentUserProvider } from './storage/CurrentUserContext.jsx';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import NewProduct from './components/NewProduct.jsx';

const App = () => {
    //const apiUrl = import.meta.env.VITE_APP_API_URL

    return (
        <CurrentUserProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/products/:id' element={<Card />} />
                        <Route path='/new' element={<NewProduct />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </CurrentUserProvider>
    )
};

export default App;