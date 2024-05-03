import '../styles/Form.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPayload } from '../utils/formatPayload';


function NewProduct() {
    const [selectedFile, setSelectedFile] = useState(null);
    const sizesList = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49']
    const { register, getValues } = useForm()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const values = getValues()

        const { payload, error } = formatPayload(values)
        console.log(payload)
        console.log(error)

        // // Create payload following backend Product model
        // let values = getValues()
        // const sizes = getValues('size')
        // const cleanSizes = []
        // for (let i in sizes) {
        //     if (sizes[i] !== '') cleanSizes.push([i, sizes[i]])
        // }

        // values.size = Object.fromEntries(cleanSizes)
        // const payload = values
        // console.log(payload)

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
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className='form-container'>
            <h2>Add new product</h2>
            <form className='form' onSubmit={handleSubmit} >
                <label htmlFor='name'>Name</label>
                <input {...register('name')} required />

                <label htmlFor='description'>Description</label>
                <textarea {...register('description')} required></textarea>

                <label htmlFor='price'>Price (€)</label>
                <input type='number' step='0.01' {...register('price')} required />

                <div className='option-container'>
                    <label htmlFor='img'>Image</label>
                    {/* <div className='image'>
                        <div
                            className={`custom-upload ${!selectedFile ? '' : 'file'}`}
                            onClick={() => img.click()}>
                            {selectedFile ? selectedFile.name : '+'}
                        </div>
                    </div> */}
                    <input
                        type='file'
                        id='img'
                        name='img'
                        accept='image/*'
                    // style={{ display: 'none' }}
                    // onChange={handleFileChange} 
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