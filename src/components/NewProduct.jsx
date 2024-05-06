import '../styles/Form.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { formatPayload } from '../utils/formatPayload';

function NewProduct() {
    const [error, setError] = useState(null)
    const { register, handleSubmit, } = useForm()
    const navigate = useNavigate()
    const sizesList = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49']

    const onSubmit = async (data) => {
        const { payload, error } = formatPayload(data)
        if (!error) {
            // Send payload to database
             const urlPost = `http://localhost:8080/admin`
            // const urlPost = `${import.meta.env.VITE_APP_API_URL}admin`
            try {
                await fetch(urlPost, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                navigate('/products')
            }
            catch (error) { console.log(error) }
        } else { setError(error) }
    }

    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input {...register('name')} required />

                <label htmlFor='description'>Description</label>
                <textarea {...register('description')} required></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input type='number' step='0.01' min='0' {...register('price')} required />

                <label htmlFor='img'>Image</label>
                <input {...register('img')} placeholder='url' required />

                <label>Category</label>
                <div className='category-container'>
                    <select {...register('category.gender')} required>
                        <option value='' hidden>Gender</option>
                        <option value='Man' name='Man'>Man</option>
                        <option value='Woman' name='Woman'>Woman</option>
                    </select>
                    <select {...register('category.use')} required>
                        <option value='' hidden>Use</option>
                        <option value='Lifestyle' name='Lifestyle'>Lifestyle</option>
                        <option value='Performance' name='Performance'>Performance</option>
                    </select>
                </div>

                <label htmlFor='size'>Size</label>
                <div className='size-container'>
                    {sizesList.map(size =>
                        <div className='size' key={size}>
                            <label htmlFor={size}>{size}</label>
                            <input type='number' min='0'{...register(`size.${size}`)} />
                        </div>
                    )}
                </div>

                <h3>{error}</h3>
                <div className='btn-container'>
                    <button className='btn' type='submit'>Create</button>
                    <button className='btn' type='reset'>Reset form</button>
                    <Link to='/products'><button className='btn'>Cancel</button></Link>
                </div>
            </form >
        </div >
    )
}

export default NewProduct