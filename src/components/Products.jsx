import '../styles/ProductsAndCard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFetchData from '../hooks/useFetchData.js';
import useFilterProducts from '../hooks/useFilterProducts.js';
import Filter from './Filter.jsx';

function Products() {
    const [filter, setFilter] = useState({ gender: [], size: [], minPrice: 0, maxPrice: 0, use: [] })
    const urlApi = 'http://localhost:8080/api/v1/products';
    const { data, loading } = useFetchData(urlApi)
    const { displayedProducts } = useFilterProducts(data, loading, filter)

    return (
        <>
            <h1>Our Products</h1>
            <div className='products-container'>
                {loading ? <h2>Loading...</h2> : null}
                {displayedProducts.length === 0
                    ? <h2>No products found</h2>
                    : displayedProducts.map(product => (
                        <div key={product._id} className='product'>
                            <h3>{product.name}</h3>
                            <img src={product.img} alt={product.name} />
                            <p><span>Price</span>: {product.price}€</p>
                            <Link to={`/products/${product._id}`}><button>Detail</button></Link>
                        </div>
                    ))}
            </div>
            <Filter filter={filter} setFilter={setFilter} />
        </>
    )
}

export default Products