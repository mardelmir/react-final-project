import '../styles/Cart.css'
import { Link } from 'react-router-dom'
import { useCart } from '../storage/CartContext.jsx'
import { useRef } from 'react'

function Cart() {
    const { cart, removeFromCart } = useCart()
    // const { currentUser } = useCurrentUser()
    const starRef = useRef()

    const handleClick = (product) => {
        removeFromCart(product)
    }
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
                                <Link to={`/products/${product._id}`}><button>Detail</button></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" className="star" ref={starRef} width="44"
                                    height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#66afcc" fill="#66afcc"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    onClick={() => handleClick(product)}>
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