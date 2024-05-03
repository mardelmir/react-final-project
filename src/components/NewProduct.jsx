import '../styles/Form.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPayload } from '../utils/formatPayload';
// import { firebaseApp } from '../config/firebase';

function NewProduct() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)
    const sizesList = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49']
    const { register, handleSubmit, getValues } = useForm()

    const onSubmit = data => {
        // const storageRef = firebaseApp.storage().ref()
        // const fileRef = storageRef.child(data.image[0].name)
        // fileRef.put(data.image[0]).then(() => { console.log('Uploaded file') })
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     const values = getValues()
    //     const { payload, error } = formatPayload(values)
    //     console.log(payload)

    //     if (!error) {
    // Send payload to database
    // const urlPost = 'http://localhost:8080/api/v1/admin/'
    // try {
    //     await fetch(urlPost, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(payload)
    //     })
    //     navigate('/')
    // }
    // catch (error) { console.log(error) }
    //     } else { setError(error) }
    // }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input {...register('name')} required />

                <label htmlFor='description'>Description</label>
                <textarea {...register('description')} required></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input type='number' step='0.01' {...register('price')} required />

                <label htmlFor='img'>Image</label>
                <div className='img-container'>
                    <div className='image'>
                        <div
                            className={`custom-upload ${!file ? '' : 'file'}`}
                            onClick={() => img.click()}>
                            {file ? file.name : 'Add new image'}
                        </div>
                    </div>
                    <input
                        type='file'
                        {...register('img')}
                        id='img'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>

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
                            <input type='number' {...register(`size.${size}`)} />
                        </div>
                    )}
                </div>

                <h3>{error}</h3>
                <div className='btn-container'>
                    <button className='formBtn' type='submit'>Create</button>
                    <button className='formBtn' type='reset'>Reset form</button>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
            </form >
        </div >
    )
}

export default NewProduct