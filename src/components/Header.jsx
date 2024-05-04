import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../storage/CurrentUserContext.jsx'
import DarkButton from './DarkButton.jsx'

function Header({ theme }) {
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
                        <img className='logo' src={theme === "light" ? "/images/logo.png" : "/images/logoDark.png"} alt="logo" />
                    </Link>
                </div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About Us</Link>
            </nav>

            <div className='search-container'>
                <img src='./icons/glass.svg' alt='glass' className='glass' />
                <input className='searchBar' type='text' />
                <button>Search</button>
            </div>

            <div className='user'>
                <Link to='/cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="cart"
                        width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#213446" fill="none"
                        strokeLinecap="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M9.5 17h-3.5v-14h-2" />
                        <path d="M6 5l14 1l-.615 4.302m-6.885 2.698h-6.5" />
                        <path
                            d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                    </svg>
                </Link>
                {currentUser && currentUser.role === 'admin' && (
                    <Link to='/new'>New product</Link>
                )}
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