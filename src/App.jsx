import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import FormLogin from './components/FormLogin.jsx';
import FormRegister from './components/FormRegister.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'

const App = () => {
    //const apiUrl = import.meta.env.VITE_APP_API_URL

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/login' element={<FormLogin />} />
                    <Route path='/register' element={<FormRegister />} />
                    <Route path='/products/:id' element={<Card />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
};

export default App;