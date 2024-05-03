import '../styles/Filter.css'

function Filter({ filter, setFilter }) {
    const sizesList = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

    const onChangeHandler = (e) => {
        // We select the class of the parent (or the grandparent)
        const category = e.target.parentElement.parentElement.classList[1] || e.target.parentElement.parentElement.parentElement.classList[1]
        // If we checked a box, add it to the filter
        if (e.target.checked) {
            setFilter({ ...filter, [category]: [...filter[category], e.target.name] })
            // If we unchecked a box, remove it from the filter
        } else {
            const newList = [...filter[category]].filter(item => item !== e.target.name)
            setFilter({ ...filter, [category]: newList })
        }
    }

    const onChangeHandlerPrice = (e) => setFilter({ ...filter, [e.target.name]: e.target.value })

    return (
        <div className='filter'>
            <fieldset className="filter gender">
                <legend>Gender</legend>
                <div className='filterField'>
                    <label htmlFor="Man">Man</label>
                    <input
                        type="checkbox"
                        id="Man"
                        name="Man"
                        onChange={onChangeHandler} />
                </div>
                <div className='filterField'>
                    <label htmlFor="Woman">Woman</label>
                    <input
                        type="checkbox"
                        id="Woman"
                        name="Woman"
                        onChange={onChangeHandler} />
                </div>
            </fieldset>

            <fieldset className="filter size">
                <legend>Size</legend>
                <div className='listSizes'>
                {sizesList.map(size => (
                    <div key={size} className='filterField'>
                        <label htmlFor={size}>{size}</label>
                        <input
                            type="checkbox"
                            id={size}
                            name={size}
                            onChange={onChangeHandler} />
                    </div>
                ))}
                </div>
            </fieldset>

            <fieldset className="filter use">
                <legend>Use</legend>
                <div className='filterField'>
                <label htmlFor="Lifestyle">Lifestyle</label>
                <input
                    type="checkbox"
                    id="Lifestyle"
                    name="Lifestyle"
                    onChange={onChangeHandler} />
                </div>
                <div className='filterField'>
                <label htmlFor="Performance">Performance</label>
                <input
                    type="checkbox"
                    id="Performance"
                    name="Performance"
                    onChange={onChangeHandler} />
                </div>
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
    )
}

export default Filter