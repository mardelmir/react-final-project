import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowResults from './ShowResults';

function Search() {
    const search = useParams().search
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const urlApi = search === undefined
            ? 'http://localhost:8080/api/v1/products'
            : `http://localhost:8080/api/v1/products/?search=${search}`

        // const urlApi = search === undefined
        //     ? `${import.meta.env.VITE_APP_API_URL}products`
        //     : `${import.meta.env.VITE_APP_API_URL}products/?search=${search}`

        const fetchData = async () => {
            try {
                const response = await fetch(urlApi)
                if (!response.ok) { throw new Error('Error: could not access endpoint') }
                const resData = await response.json()
                setData(resData.result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [search])

    return (<>
        <div className='h1-products'>
            <h1>Search results</h1>
        </div>
        <ShowResults loading={loading} displayedProducts={data} />
    </>)
}

export default Search