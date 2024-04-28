import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData.js';

const sizesList = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

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
        const category = e.target.parentElement.classList[1]
        if (e.target.checked) {
            setFilter({ ...filter, [category]: [...filter[category], e.target.name], isFiltered: true })
        } else {
            const newList = [...filter[category]].filter(item => item !== e.target.name)
            setFilter({ ...filter, [category]: newList})
        }
        console.log(filter)
    }

    const onChangeHandlerPrice = (e) => {
        console.log(e.target.value)
    }
    useEffect( (),[filter])

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

            <div className='filter'>
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

                <fieldset className="filter size">
                    <legend>Size</legend>
                    {sizesList.map(size => (
                        <>
                            <label htmlFor={size}>{size}</label>
                            <input
                                type="checkbox"
                                id={size}
                                name={size}
                                onChange={onChangeHandler} />
                        </>
                    ))}
                </fieldset>

                <fieldset className="filter use">
                    <legend>Use</legend>
                    <label htmlFor="lifestyle">Lifestyle</label>
                    <input
                        type="checkbox"
                        id="lifestyle"
                        name="lifestyle"
                        onChange={onChangeHandler} />
                    <label htmlFor="performance">Performance</label>
                    <input
                        type="checkbox"
                        id="performance"
                        name="performance"
                        onChange={onChangeHandler} />
                </fieldset>
                <fieldset>
                    <legend>Price</legend>
                    <input type="range" id="price" name="price" min="40" max="250" step="10" onChange={onChangeHandlerPrice}/>
                </fieldset>
            </div>

        </>
    )
}

export default Products