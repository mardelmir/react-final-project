import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData.js';

function Products() {
    //const [products, setProducts] = useState([])
    const [filter, setFilter] = useState({ gender: [] })

    const urlApi = 'http://localhost:8080/api/v1/products';
    const { data: products } = useFetchData(urlApi)

    // useEffect(() => {
    //     console.log("hola")
    //     setProducts(data)
    // }, [])


    const onChangeHandler = (e) => {
        if (e.target.checked) {
            setFilter({ ...filter, gender: [e.target.name] })
            console.log(e.target.parentElement.id)
            
        }
    }
    
    // useEffect(,[filter])

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

            <label>Man</label>
            <input
                type="checkbox"
                id="man"
                name="man"
                onChange={onChangeHandler} />
            <label>Woman</label>
            <input
                type="checkbox"
                id="woman"
                name="woman"
                onChange={onChangeHandler} />
        </>
    )
}

export default Products