import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecpieList from "../../components/RecpieList/RecpieList"


export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:8001/recipes?q=';

  const {error ,  isLoading , data} = useFetch(url) 

  const filteredData = data ? data.filter(recipe => recipe.title.includes(query)) : [] ;

  return (
    <div>
      <h2 className='page-title'> recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>wait...</p>}
      { filteredData.length > 0 ? <RecpieList recipes={filteredData} /> : <p className='search-error'>You are not searchng correctly</p>}

    </div>
  )
}
