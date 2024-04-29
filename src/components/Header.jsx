import { Link } from 'react-router-dom'

function Header() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:8080/api/v1/logout'

        try {
            await fetch(urlPost, { method: 'POST' })
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
            <div className='menu'>
                <Link to='/login'>Sign In</Link>
                <p>|</p>
                <Link to='/register'>Sign Up</Link>
                <p>|</p>
                <button onClick={handleSubmit}>Log Out</button>

                {/* No están ni la imagen ni el componente creados 
                    <Link to='/cart'><img className='cart' src='src/assets/icons/cart.png' /></Link> */}
            </div>
        </header >
    )
}

export default Header