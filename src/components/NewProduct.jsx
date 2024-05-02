import '../styles/Form.css'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function NewProduct() {
    const [selectedFile, setSelectedFile] = useState(null);
    const formRef = useRef()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('test1234')
    const [gender, setGender] = useState('')
    const [use, setUse] = useState('')
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            name,
            description,
            price,
            category: {
                gender,
                use
            },
            size
        }


        // const urlPost = 'http://localhost:8080/api/v1/admin/'
        // const payload = { values }

        // try {
        //     await fetch(urlPost, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(payload)
        //     })
        //     navigate('/')
        // }
        // catch (error) { console.log(error) }
    }

    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form className='form' onSubmit={handleSubmit} ref={formRef}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />

                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input
                    type='number'
                    id='price'
                    name='price'
                    step='0.01'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required />

                {/* <label htmlFor='img'>Image</label>
                <div className='img'>
                    <div
                        className={`custom-upload ${!selectedFile ? '' : 'file'}`}
                        onClick={() => img.click()}>
                        {selectedFile ? selectedFile.name : '+'}
                    </div>
                </div>
                <input
                    type='file'
                    id='img'
                    name='img'
                    value={img}
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={handleFileChange} /> */}

                <label>Category</label>
                <div className='option-container'>
                    {/* <select name='gender' onChange={ }>
                        <option value='' hidden>Gender</option>
                        <option value='Man' name='Man'>Man</option>
                        <option value='Woman' name='Woman'>Woman</option>
                    </select> */}
                    {/* <select name='use' onChange={ }>
                        <option value='' hidden>Use</option>
                        <option value='Lifestyle' name='Lifestyle'>Lifestyle</option>
                        <option value='Performance' name='Performance'>Performance</option>
                    </select> */}
                </div>


                <div className='option-container'>
                    <div className='option'>
                        <label htmlFor='size'>Size</label>
                        <input
                            type='number'
                            id='size'
                            name='size'
                            min='35'
                            max='49'
                            value={size}
                            onChange={e => e.target.value}
                            step='1'
                            required />
                    </div>
                    <div className='option'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input
                            type='number'
                            id='quantity'
                            name='quantity'
                            value={quantity}
                            onChange={e => setQuantity.target.value}
                            step='1'
                            required />
                    </div>

                </div>
                <div className='btn-container'>
                    <button className='formBtn' type='submit'>Create</button>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
            </form >
        </div >
    )
}

export default NewProduct





















// const formData = new FormData(formRef.current)
// const values = Object.fromEntries(formData);
// console.log(values)