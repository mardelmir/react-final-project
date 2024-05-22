import { Link } from 'react-router-dom'
import { useCart } from '../storage/CartContext'

function ShowProducts({ loading, displayedProducts }) {
    const { cart, addToCart, removeFromCart } = useCart()

    const handleClick = (product) => {
        cart.some(cartItem => cartItem._id === product._id) 
            ? removeFromCart(product)
            : addToCart(product)
    }

    const isInCart = (product) => cart.some(cartItem => cartItem._id === product._id)

    return (
        <div className='products-container'>
            {loading ? <h2>Loading...</h2> : null}
            {displayedProducts.length === 0
                ? <h2>No products found</h2>
                : displayedProducts.map(product => {
                    const starClass = isInCart(product) ? 'star fav' : 'star'
                    return (
                        <div key={product._id} className='product'>
                            <h3>{product.name}</h3>
                            <img src={product.img} alt={product.name} />
                            <p><span>Price</span>: {product.price}€</p>
                            <div className='btn-container'>
                                <Link to={`/products/${product._id}`}><button className='btn'>Detail</button></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" className={starClass} width="44"
                                    height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="#213446" strokeLinecap="round" strokeLinejoin="round"
                                    onClick={() => handleClick(product)}>
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                </svg>
                            </div>
                        </div>
                    )
                })}
        </div >
    )
}

export default ShowProducts