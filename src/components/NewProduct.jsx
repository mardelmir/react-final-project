import '../styles/Form.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { formatPayload } from '../utils/formatPayload';

function NewProduct() {
    const [file, setFile] = useState()
    const [newError, setNewError] = useState()
    const { register, handleSubmit, } = useForm()
    const navigate = useNavigate()
    const sizesList = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49']

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        setNewError()
        try {
            const { payload, error } = await formatPayload(data, file)
            if (error.length === 0) {
                // Send payload to database
                const urlPost = `http://localhost:8080/api/v1/admin`
                // const urlPost = `${import.meta.env.VITE_APP_API_URL}admin`
                await fetch(urlPost, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                })
                navigate('/products')
            } else { setNewError(error) }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                <label htmlFor='name'>Name</label>
                <input {...register('name')} required />

                <label htmlFor='description'>Description</label>
                <textarea {...register('description')} required></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input type='number' step='0.01' min='0' {...register('price')} required />

                <label htmlFor='img'>Image (file or url)</label>
                <input type='file' {...register('img')} id='img' accept='image/*' onChange={handleFileChange} />
                <input type='text' {...register('imgUrl')} placeholder='url' />

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
 
                {newError && (newError.map((err, i) => <h3 key={i}>{err}</h3>))}
                
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