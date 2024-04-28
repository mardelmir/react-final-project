import '../styles/Form.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function FormRegister() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:8080/api/v1/register'
        const payload = { email, password, role }

        try {
            await fetch(urlPost, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            setEmail('')
            setPassword('')
        }
        catch (error) { console.log(error) }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='formItem'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' onChange={e => setEmail(e.target.value)} required />
            </div>

            <div className='formItem'>
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' name='password' onChange={e => setPassword(e.target.value)} required />
            </div>

            <div className='formItem'>
                <label htmlFor='role'>Administrador</label>
                <input type='checkbox' name='role' onClick={e => setRole('on')} />
            </div>

            {/* <div className='warning'></div> */}
            <div className='btn-container'>
                <button type='submit'>Sign Up</button>
                <Link to='/'><button>Go back</button></Link>
            </div>
        </form>
    )
}

export default FormRegister