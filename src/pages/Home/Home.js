import './Home.css'
import { useFetch } from '../../hooks/useFetch'

import RecpieList from '../../components/RecpieList/RecpieList'

export default function Home() {
  const {data, error , isLoading} = useFetch('http://localhost:8001/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Wait...</p>}
      {data && <RecpieList recipes={data} />}

    </div>
  )
}
