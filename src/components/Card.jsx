import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


function Card({productID}){
    const [product, setProduct] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    const productId = productID || useParams().id

    const urlApi = `http://localhost:8080/api/v1/products/${productId}`;

    useEffect(() => {
        async function fetchProducts () {
            try {
                const res = await fetch(urlApi)
                const data = await res.json()
                setProduct(data.product)
                console.log(data)
                setIsLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    },[])

    return (
        <>
        {isLoaded === false
        ? (<div>loading...</div>)
        : (
            <div key={product._id}>
                <Link to={`/products/${product._id}`}><h2>{product.name}</h2></Link>
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