import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import { Link } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData.js';

function Products() {
    //poner la url en .env --> ????
    const urlApi = 'http://localhost:8080/api/v1/products';
    const { data: products } = useFetchData(urlApi)

    return (
        <>
            <h1>Our Products</h1>
            <div className='container'>
                {products.map(product => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.img}</p>
                        <p>Price: {product.price}</p>
                        <Link to={`/products/${product._id}`}><button>Detail</button></Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products


//const [products, setProducts] = useState([])

// useEffect(() => {
//     async function fetchProducts() {
//         try {
//             const res = await fetch(urlApi)
//             const data = await res.json()
//             setProducts(data.result)
//             // console.log(data.products)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     fetchProducts()
// }, [])