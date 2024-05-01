import { useState, useEffect } from "react";

const useFilterProducts = (products, loading, filter) => {
    const [displayedProducts, setDisplayedProducts] = useState([])

    useEffect(() => {
        let filteredList = [...products];
        // Filter by gender
        if (filter.gender.length === 1) {
            filteredList = filteredList.filter(product => filter.gender.includes(product.category.gender))
        }
        // Filter by use
        if (filter.use.length === 1) {
            filteredList = filteredList.filter(product => filter.use.includes(product.category.use))
        }
        // Filter by Max price
        if (filter.maxPrice > 0) {
            filteredList = filteredList.filter(product => product.price <= filter.maxPrice)
        }
        // Filter by Min price
        if (filter.minPrice > 0) {
            filteredList = filteredList.filter(product => product.price >= filter.minPrice)
        }
        // Filter by size
        if (filter.size.length !== 0 && filter.size.length !== 15) {
            filteredList = filteredList.filter(product => {
                let sizeFound = false
                // Check for every size in our filter if it exists in the product
                filter.size.forEach(sizeNumber => {
                    if (Object.keys(product.size).includes(sizeNumber)) { sizeFound = true }
                })
                return sizeFound
            })
        }
        // Update Displayed Products
        setDisplayedProducts(filteredList)
    }, [filter, loading])

    return { displayedProducts }
}

export default useFilterProducts