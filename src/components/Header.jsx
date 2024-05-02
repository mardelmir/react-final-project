import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../storage/CurrentUserContext.jsx'
import DarkButton from './DarkButton.jsx'

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
            <nav className='nav'>
                <div>
                    <Link to='/'>
                        <img className='logo' src="/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About Us</Link>
            </nav>

            <div className='search-container'>
                <img src='./src/assets/images/glass.svg' alt='glass' className='glass' />
                <input className='searchBar' type='text' />
                <button>Search</button>
            </div>

            <div className='user'>
                <Link to='/cart'>
                    <img src='./src/assets/images/cart.svg' alt='cart' className='cart' />
                </Link>
                {!currentUser
                    ? <>
                        <Link to='/login'>Sign In</Link>
                        <Link to='/register'>Sign Up</Link>
                    </>
                    : <button onClick={handleSubmit}>Log Out</button>
                }
            </div>

            <DarkButton />
        </header >
    )
}

export default Header