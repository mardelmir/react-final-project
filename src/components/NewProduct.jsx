import '../styles/Form.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NewProduct() {
    const [] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:8080/api/v1/admin/'
        const payload = { email, password, role }

        try {
            await fetch(urlPost, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            navigate('/')
        }
        catch (error) { console.log(error) }
    }

    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    required />

                <label htmlFor='description'>Description</label>
                <textarea name='description'></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input
                    type='number'
                    id='price'
                    name='price'
                    step='0.01'
                    required />

                <label htmlFor='img'>Image</label>
                <input
                    type='file'
                    id='img'
                    name='img'
                    accept='image/*' />

                <label htmlFor='category'>Category</label>
                <div className='option-container'>
                    <select name='gender'>
                        <option value='Man' name='Man'>Man</option>
                        <option value='Woman' name='Woman'>Woman</option>
                    </select>
                    <select name='use'>
                        <option value='Lifestyle' name='Lifestyle'>Lifestyle</option>
                        <option value='Performance' name='Performance'>Performance</option>
                    </select>
                </div>

                <label htmlFor='size'>Size</label>
                <div className='option-container'>
                    <input
                        type='number'
                        id='size'
                        name='size'
                        min='35'
                        max='49'
                        step='1'
                        placeholder='Size'
                        required />
                    <input
                        type='number'
                        id='cuantity'
                        name='cuantity'
                        step='1'
                        placeholder='Cuantity'
                        required />
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