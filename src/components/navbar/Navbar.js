import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to='/' className='brand'><h1>Full House</h1></Link>
            <Link to='/create'><h1>create your rcpie</h1></Link>

        </nav>
    </div>
  )
}
