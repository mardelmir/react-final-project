import { createContext, useContext, useState } from 'react';

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item) => cart.includes(item) ? null : setCart([...cart, item])
    const removeFromCart = (item) => {
        const updatedCart = cart.filter(e => e !== item)
        setCart(updatedCart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)