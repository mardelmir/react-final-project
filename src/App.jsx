import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFetchData from './hooks/useFetchData.js';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx'
import FormLogin from './components/FormLogin.jsx';
import FormRegister from './components/FormRegister.jsx'
import Products from './components/Products.jsx'

const App = () => {
    //const apiUrl = import.meta.env.VITE_APP_API_URL

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/login' element={<FormLogin />} />
                <Route path='/register' element={<FormRegister />} />
            </Routes>
        </Router>
    )
};

export default App;