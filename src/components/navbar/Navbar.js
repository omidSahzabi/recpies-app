import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className='brand'><h1>Full House Recipes</h1></Link>
            <SearchBar />
            <Link to='/create'><h1>create your recipe</h1></Link>

        </nav>
    </div>
  )
}
