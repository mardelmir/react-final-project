import '../styles/ProductsAndCard.css'
import { Link, useParams } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'

function Card() {
    const productId = useParams().id
    const urlApi = `http://localhost:8080/api/v1/products/${productId}`;
    const { data: product, loading } = useFetchData(urlApi)

    return (
        <>
            {loading
                ? <h3>Loading...</h3>
                : <div className='card-container'>
                    <div key={product._id} className='card'>
                        <img src={product.img} alt={product.name} />
                        <div className='detail'>
                            <h2>{product.name}</h2>
                            <p><span>Gender</span>: {product.category.gender}</p>
                            <p><span>Use</span>: {product.category.use}</p>
                            {/* <p><span>Size</span>: {product.size}</p> */}
                            <p><span>Price</span>: {product.price}€</p>
                            <Link to='/products'><button>Go back</button></Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Card