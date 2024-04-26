import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <nav className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/'>Mens</Link>
                <Link to='/'>Womens</Link>
                <Link to='/about'>About Us</Link>
            </nav>
            <input className='searchBar' type='text' />
            <div className='menu'>
                <Link to='/login'>Sign In</Link>
                <Link to='/register'>Sign Up</Link>
                <Link to='/logout'>Log Out</Link>

                {/* No están ni la imagen ni el componente creados 
                    <Link to='/cart'><img className='cart' src='src/assets/icons/cart.png' /></Link> */}
            </div>
        </header >
    )
}

export default Header