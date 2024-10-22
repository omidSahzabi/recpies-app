import './Home.css'
import RecpieList from '../../components/RecpieList/RecpieList'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {


  const { collectionData : data , isLoading , error} = useCollection('recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Wait...</p>}
      {data && <RecpieList recipes={data} />}

    </div>
  )
}
