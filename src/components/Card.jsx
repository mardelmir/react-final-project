import '../styles/ProductsAndCard.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCurrentUser } from '../storage/CurrentUserContext.jsx'
import useFetchData from '../hooks/useFetchData'

function Card() {
    const productId = useParams().id
    const urlApi = `http://localhost:8080/api/v1/products/${productId}`;
    const { data: product, loading } = useFetchData(urlApi)
    const navigate = useNavigate()
    const { currentUser } = useCurrentUser()

    const deleteProduct = async (productId) => {
        const urlDelete = `http://localhost:8080/api/v1/admin/${productId}/delete`
        await fetch(urlDelete, { method: 'DELETE' })
        navigate('/products')
    }

    return (
        <>
            {loading
                ? <h3>Loading...</h3>
                : <div className='card-container'>
                    <div key={product._id} className='card'>
                        <img src={product.img} alt={product.name} />
                        <div className='detail'>
                            <h2>{product.name}</h2>
                            <p><span>Description</span>: {product.description}</p>
                            <p><span>Gender</span>: {product.category.gender}</p>
                            <p><span>Use</span>: {product.category.use}</p>
                            {/* <p><span>Size</span>: {product.size}</p> */}
                            <p><span>Price</span>: {product.price}€</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="star" width="44"
                                height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#213446" fill="none"
                                strokeLinecap="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <div className='btn-container'>
                                <Link to='/products'><button>Go back</button></Link>
                                {currentUser && currentUser.role === 'admin' && (
                                    <>
                                        <Link to={`/products/${product._id}/update`}><button>Update</button></Link>
                                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Card