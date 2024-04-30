import '../styles/ProductsAndCard.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData.js';

const sizesList = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

function Products() {
    const [filter, setFilter] = useState({ gender: [], size: [], minPrice: 0, maxPrice: 0, use: [] })
    const [displayedProducts, setDisplayedProducts] = useState([])

    const urlApi = 'http://localhost:8080/api/v1/products';
    const { data: products, loading: isFetched } = useFetchData(urlApi)

    const filterProducts = () => {
        let filteredList = [...products];
        //Filter by gender
        if (filter.gender.length === 1) {
            console.log("hola")
            filteredList = filteredList.filter(product => {
                return filter.gender.includes(product.category.gender)
            })
        }
        //Filter by use
        if (filter.use.length === 1) {
            filteredList = filteredList.filter(product => {
                const filtro = filter.use.includes(product.category.use)
                // console.log(filtro)
                return filter.use.includes(product.category.use)
            })
        }
        //Filter by Max price
        if (filter.maxPrice > 0) {
            filteredList = filteredList.filter(product => product.price <= filter.maxPrice)
        }
        //Filter by Min price
        if (filter.minPrice > 0) {
            filteredList = filteredList.filter(product => product.price >= filter.minPrice)
        }
        //Filter by size
        if (filter.size.length !== 0 && filter.size.length !== 15) {
            filteredList = filteredList.filter(product => {
                let isSizeFound = false
                //Check for every size in our filter if it exists in the product
                filter.size.forEach(sizeNumber => {
                    if (Object.keys(product.size).includes(sizeNumber)) {
                        isSizeFound = true
                    }
                })
                return isSizeFound
            })
        }
        //Update Displayed Products 
        setDisplayedProducts(filteredList)
    }

    useEffect(() => {
        filterProducts()
    }, [filter, isFetched])

    const onChangeHandler = (e) => {
        //We select the class of the parent (or the grandparent)
        const category = e.target.parentElement.classList[1] || e.target.parentElement.parentElement.classList[1]
        //If we checked a box, add it to the filter
        if (e.target.checked) {
            setFilter({ ...filter, [category]: [...filter[category], e.target.name] })
            //If we unchecked a box, remove it from the filter
        } else {
            const newList = [...filter[category]].filter(item => item !== e.target.name)
            setFilter({ ...filter, [category]: newList })
        }
    }

    const onChangeHandlerPrice = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Our Products</h1>
            <div className='products-container'>
                {displayedProducts.length === 0
                    ? <h2>Loading...</h2>
                    : displayedProducts.map(product => (
                        <div key={product._id} className='product'>
                            <h3>{product.name}</h3>
                            <img src={product.img} alt={product.name} />
                            <p><span>Price</span>: {product.price}€</p>
                            <Link to={`/products/${product._id}`}><button>Detail</button></Link>
                        </div>
                    ))}
            </div>

            <div className='filter'>
                <fieldset className="filter gender">
                    <legend>Gender</legend>
                    <label htmlFor="Man">Man</label>
                    <input
                        type="checkbox"
                        id="Man"
                        name="Man"
                        onChange={onChangeHandler} />
                    <label htmlFor="Woman">Woman</label>
                    <input
                        type="checkbox"
                        id="Woman"
                        name="Woman"
                        onChange={onChangeHandler} />
                </fieldset>

                <fieldset className="filter size">
                    <legend>Size</legend>
                    {sizesList.map(size => (
                        <div key={size}>
                            <label htmlFor={size}>{size}</label>
                            <input
                                type="checkbox"
                                id={size}
                                name={size}
                                onChange={onChangeHandler} />
                        </div>
                    ))}
                </fieldset>

                <fieldset className="filter use">
                    <legend>Use</legend>
                    <label htmlFor="Lifestyle">Lifestyle</label>
                    <input
                        type="checkbox"
                        id="Lifestyle"
                        name="Lifestyle"
                        onChange={onChangeHandler} />
                    <label htmlFor="Performance">Performance</label>
                    <input
                        type="checkbox"
                        id="Performance"
                        name="Performance"
                        onChange={onChangeHandler} />
                </fieldset>
                <fieldset className="filter price">
                    <legend>Price</legend>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="$ Min."
                        onChange={onChangeHandlerPrice}
                    />
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="$ Max."
                        onChange={onChangeHandlerPrice}
                    />
                </fieldset>
            </div>

        </>
    )
}

export default Products