import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => !cart.some(cartItem => cartItem._id === item._id) ? setCart([...cart, item]) : null
    const removeFromCart = (item) => setCart(cart.filter(cartItem => cartItem._id !== item._id));

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)