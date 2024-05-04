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
            <div className='h1-products'>
                <h1>Our Products</h1>
            </div>
            <div className='filter-cards-container'>
                <Filter filter={filter} setFilter={setFilter} />
                <div className='products-container'>
                    {loading ? <h2>Loading...</h2> : null}
                    {displayedProducts.length === 0
                        ? <h2>No products found</h2>
                        : displayedProducts.map(product => (
                            <div key={product._id} className='product'>
                                <h3>{product.name}</h3>
                                <img src={product.img} alt={product.name} />
                                <p><span>Price</span>: {product.price}€</p>
                                <div className='btn-container'>
                                    <Link to={`/products/${product._id}`}><button>Detail</button></Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="star" width="44"
                                        height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#213446" fill="none"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Products