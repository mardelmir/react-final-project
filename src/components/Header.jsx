import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../storage/CurrentUserContext.jsx'

function Header() {
    const { currentUser, setCurrentUser } = useCurrentUser()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:8080/api/v1/logout'

        try {
            await fetch(urlPost, { method: 'POST' })
            setCurrentUser(null)
            navigate('/')
        }
        catch (error) { console.log(error) }
    }

    return (
        <header className='header'>
            <nav className='menu'>
                <div>soy el LOGO</div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About Us</Link>
            </nav>
            <input className='searchBar' type='text' />

            {!currentUser
                ? <div className='menu user'>
                    <Link to='/login'>Sign In</Link>
                    <Link to='/register'>Sign Up</Link>
                </div>
                : <div className='menu user'>
                    <button onClick={handleSubmit}>Log Out</button>
                </div>
            }
        </header >
    )
}

export default Header