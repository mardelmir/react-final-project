import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'

function Card({ productID }) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const productId = productID || useParams().id

    const urlApi = `http://localhost:8080/api/v1/products/${productId}`;

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(urlApi)
                const data = await res.json()
                setProduct(data.result)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    
    return (
        <>
            {loading === false
                ? (<h3>Loading...</h3>)
                : (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <img src={product.img} alt={product.name} />
                        <p>Gender: {product.category.gender}</p>
                        <p>Use: {product.category.use}</p>
                        <p>Size: {product.size}</p>
                        <p>Price: {product.price}€</p>
                    </div>
                )
            }
        </>
    )
}

export default Card