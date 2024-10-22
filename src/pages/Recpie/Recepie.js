import './Recpie.css'
import {useParams} from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'


function Recepie() {
  const { id } = useParams()
  const {mode} = useTheme()

  const [recipe  , setRecipe ] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
  const [error , setError] = useState(false)

  const handleClick = async () => {
    try{
      const ref = doc(db,'recipes',id)
      await updateDoc(ref , {
        title : 'something new'
      })
    }catch(err){
      console.log(err)
    }
  }

useEffect(()=>{
  setIsLoading(true)
  const ref = doc(db , 'recipes' , id)
  const unsub = onSnapshot(ref , (snapshot)=>{
    if(snapshot.empty){
      setError(' nothing found')
      setIsLoading(false)
    }else{
      setIsLoading(false)
      setRecipe(snapshot.data())
    }
  })

  return () => unsub()
},[id])



  return (
    <div className={`recipe ${mode}`}>
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
          <button onClick={handleClick}>update title</button>
        </>
      )}

    </div>
  )
}

export default Recepie
