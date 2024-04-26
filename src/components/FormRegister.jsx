import { useState } from 'react'

function FormRegister() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState()

    return (
        <>
            <form className='form' id='registerForm'>
                <label for='emailId'>Email:</label>
                <input type='email' name='email' onChange={e => setEmail(e.target.value)} required />

                <label for='passId'>Contraseña:</label>
                <input type='password' id='passId' name='password' required />

                <div className='role'>
                    <label for='roleId'>Administrador</label>
                    <input type='checkbox' id='roleId' name='role' />
                </div>

                <div className='warning'></div>
                <div className='btn-container'>
                    <button className='formBtn' type='submit'>Registrarse</button>
                    <a className='formBtn' href='/shop/products'>Volver</a>
                </div>
            </form>`
        </>
    )
}

export default FormRegister