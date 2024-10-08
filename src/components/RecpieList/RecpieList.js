import { Link } from 'react-router-dom'
import './RecpieList.css'
import { useTheme } from '../../hooks/useTheme'

export default function RecpieList({recipes}) {

  const {mode} = useTheme()

  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} needed</p>
                <div>{recipe.method.substring(0,100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Lets Cook!</Link>
            </div>
        ))}
    </div>
  )
}
