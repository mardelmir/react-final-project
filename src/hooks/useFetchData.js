import { useState, useEffect } from 'react'

const useFetchData = (apiUrl) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl)
                if (!response.ok) { throw new Error('Error: could not access endpoint') }
                const resData = await response.json()
                setData(resData.result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [apiUrl])

    return { data, loading, error }
}

export default useFetchData