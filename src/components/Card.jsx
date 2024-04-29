import { useParams } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'

function Card() {
    const productId = useParams().id

    const urlApi = `http://localhost:8080/api/v1/products/${productId}`;
    const { data: product, loading } = useFetchData(urlApi)


    return (
        <>
            {loading
                ? (<h3>Loading...</h3>)
                : (
                    <div key={product._id} className='card'>
                        <h2>{product.name}</h2>
                        <img src={product.img} alt={product.name} />
                        <p>Gender: {product.category.gender}</p>
                        <p>Use: {product.category.use}</p>
                        {/* <p>Size: {product.size}</p> */}
                        <p>Price: {product.price}€</p>
                    </div>
                )
            }
        </>
    )
}

export default Card