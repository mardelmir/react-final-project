import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData.js';

function Products() {
    //const [products, setProducts] = useState([])
    const [filter, setFilter] = useState({ gender: [], size: [], priceMin: 0, priceMax: 0, use: [], isFiltered: false })

    const urlApi = 'http://localhost:8080/api/v1/products';
    const { data: products } = useFetchData(urlApi)

    // useEffect(() => {
    //     console.log("hola")
    //     setProducts(data)
    // }, [])


    const onChangeHandler = (e) => {
        if (e.target.checked) {
            let updatedFilterCategory = filter[e.target.parentElement.classList[1]].push(e.target.name)
            console.log(updatedFilterCategory)
            console.log(e.target.name)
            console.log(filter[e.target.parentElement.classList[1]])
            setFilter({ ...filter, gender: updatedFilterCategory, isFiltered: true })
            
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
            <div>{filter.gender[0]}</div>
            <fieldset className="filter gender">
                <legend>Gender</legend>
                <label htmlFor="man">Man</label>
                <input
                    type="checkbox"
                    id="man"
                    name="man"
                    onChange={onChangeHandler} />
                <label htmlFor="woman">Woman</label>
                <input
                    type="checkbox"
                    id="woman"
                    name="woman"
                    onChange={onChangeHandler} />
            </fieldset>
        </>
    )
}

export default Products