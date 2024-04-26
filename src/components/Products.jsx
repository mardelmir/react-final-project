import {useEffect, useState} from 'react'
import Card from './Card.jsx'



function Products(){
    const [products, setProducts] = useState([])
    //poner la url en .env
    const urlApi = 'http://localhost:8080/api/v1/products';
    
    useEffect(() => {
        async function fetchProducts () {
            try {
                const res = await fetch(urlApi)
                const data = await res.json()
                setProducts(data.products)
                // console.log(data.products)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    },[])

    return (
        <>
        <h1>PRODUCTS</h1>
        <div className='container'>
        {products.map(product => (
            <Card key={product._id} productID={product._id} />
        ))}
        </div>   
        </>
    )
}

export default Products