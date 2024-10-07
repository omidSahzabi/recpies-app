import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [term , setTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)
    }
    
  return (
    <div className='searchbar'> 
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>search:</label>
            <input 
                id='search'
                type="text"
                onChange={(e) => setTerm(e.target.value)}
                required
             />
      </form>
    </div>
  )
}
