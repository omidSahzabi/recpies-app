import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export default function Navbar() {

  const { color , changeColor } = useTheme()

  return (
    <div className="navbar" style={{background : color}}>
        <nav>
            <Link to='/' className='brand'><h1>Full House Recipes</h1></Link>
            <SearchBar />
            <Link to='/create'><h1>create your recipe</h1></Link>
        </nav>
    </div>
  )
}
