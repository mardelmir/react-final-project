import '../styles/ProductsAndCard.css'
import { useState } from 'react';
import useFetchData from '../hooks/useFetchData.js';
import useFilterProducts from '../hooks/useFilterProducts.js';
import Filter from './Filter.jsx';
import FetchResults from './FetchResults.jsx';


function Products() {
    const [filter, setFilter] = useState({ gender: [], size: [], minPrice: 0, maxPrice: 0, use: [] })

    // const urlApi = `${import.meta.env.VITE_APP_API_URL}products`
    const urlApi = 'http://localhost:8080/api/v1/products'
    const { data, loading } = useFetchData(urlApi);
    const { displayedProducts } = useFilterProducts(data, loading, filter);

    return (
        <>
            <div className='h1-products'>
                <h1>Our Products</h1>
            </div>
            <div className='filter-cards-container'>
                <Filter filter={filter} setFilter={setFilter} />
                <FetchResults loading={loading} displayedProducts={displayedProducts} />
            </div>
        </>
    )
}

export default Products