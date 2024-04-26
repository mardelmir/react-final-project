import { useState, useEffect } from 'react'

const useFetchData = (apiUrl) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl)
                if (!response.ok) { throw new Error('Error al acceder a la información') }
                const resData = await response.json()
                setData(resData)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [data])

    return { data, loading, error }
}

export default useFetchData