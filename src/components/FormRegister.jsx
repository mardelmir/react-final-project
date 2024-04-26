import { useState } from 'react'

function FormRegister() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState()

    return (
        <>
            <form className='form' id='registerForm'>
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
                    <button type='submit'>Registrarse</button>
                    <a className='btn' href='/shop/products'>Volver</a>
                </div>
            </form>
        </>
    )
}

export default FormRegister