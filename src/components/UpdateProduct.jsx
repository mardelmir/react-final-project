import '../styles/Form.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { formatPayload } from '../utils/formatPayload';

function UpdateProduct() {
    const [error, setError] = useState(null)
    const { register, handleSubmit, } = useForm()
    const navigate = useNavigate()
    const sizesList = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49']

    const productId = useParams().id

    const onSubmit = async (data) => {
        const { payload } = formatPayload(data)
        // Send payload to database
        const urlPost = `http://localhost:8080/api/v1/admin/${productId}`
        try {
            await fetch(urlPost, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            navigate(`/products/${productId}`)
        }
        catch (error) {
            console.log(error)
            setError(error)
        }

    }

    return (
        <div className='form-container'>
            <h2>Update product</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input {...register('name')} />

                <label htmlFor='description'>Description</label>
                <textarea {...register('description')}></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input type='number' step='0.01' min='0' {...register('price')} />

                <label htmlFor='img'>Image</label>
                <input {...register('img')} placeholder='url' />

                <label>Category</label>
                <div className='category-container'>
                    <select {...register('category.gender')}>
                        <option value='' hidden>Gender</option>
                        <option value='Man' name='Man'>Man</option>
                        <option value='Woman' name='Woman'>Woman</option>
                    </select>
                    <select {...register('category.use')}>
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
                    <button className='btn' type='submit'>Update</button>
                    <button className='btn' type='reset'>Reset form</button>
                    <Link to={`/products/${productId}`}><button className='btn'>Cancel</button></Link>
                </div>
            </form >
        </div >
    )
}

export default UpdateProduct