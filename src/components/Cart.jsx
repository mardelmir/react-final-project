import '../styles/Cart.css'
import { useCart } from '../storage/CartContext.jsx'

function Cart() {
    const { cart } = useCart()
    return (
        <>
            <h1>Saved Products</h1>
            <ul className='cart-container'>
                {cart.length === 0
                    ? <h2>No saved products yet</h2>
                    : cart.map(product =>
                        <li key={product._id}>
                            <img src={product.img} />
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </li>
                    )}
            </ul>
        </>
    )
}

export default Cart