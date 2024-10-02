import './Recpie.css'
import {useParams} from 'react-router-dom'
import { useFetch} from '../../hooks/useFetch'

function Recepie() {
  const { id } = useParams()
  const url = 'http://localhost:8001/recipes/'+id
  const { data : recipe , error , isLoading} = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Wait...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>takes {recipe.cookingTime} to be ready</p>
          <ul>
            {recipe.ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}

    </div>
  )
}

export default Recepie
