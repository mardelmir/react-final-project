import '../styles/Cart.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../storage/CartContext.jsx'
import { useCurrentUser } from '../storage/CurrentUserContext.jsx'

function Cart() {
    const { cart, removeFromCart } = useCart()
    const { currentUser } = useCurrentUser()

    useEffect(() => {
        console.log(currentUser)
        console.log(cart)
    }, [cart])

    return (
        <>
            <div className='cart-h1'>
                <h1>Saved Products</h1>
            </div>
            <ul className='cart-container'>
                {cart.length === 0
                    ? <h2>No saved products yet</h2>
                    : cart.map(product =>
                        <li key={product._id} className='cart-product'>
                            <h2>{product.name}</h2>
                            <img src={product.img} />
                            <p><span>Price</span>: {product.price}€</p>
                            <div className='btn-container'>
                                <Link to={`/products/${product._id}`}><button className='btn'>Detail</button></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star fav" width="44"
                                    height="44" viewBox="0 0 24 24" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    onClick={() => removeFromCart(product)}>
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                </svg>
                            </div>
                        </li>
                    )}
            </ul>
        </>
    )
}

export default Cart