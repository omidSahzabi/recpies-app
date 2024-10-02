import { useEffect, useState } from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export default function Create() {

  const [title , setTitle] = useState("")
  const [cookingTime , setCookingTime] = useState("")
  const [method , setMethod] = useState("")
  const [newIngredients , setNewIngredients] = useState("")
  const [ingredients , setIngredients] = useState([])

  const {postData , data , error} = useFetch('http://localhost:8001/recipes' , 'POST')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    postData({title , ingredients , method , cookingTime : cookingTime+' minutes'})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if(newIngredients && !ingredients.includes(newIngredients)){
      setIngredients(prevIngredients => [...prevIngredients, newIngredients])
    }
    setNewIngredients('')
  }

  useEffect(()=>{
    if(data){
      navigate('/')
    }
  },[data])
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>food title:</span>
          <input
           type="text" 
           onChange={(e)=> setTitle(e.target.value)}
           value={title}
           required
           />
        </label>
        <label>
          <span>ingredients:</span>
          <div className='ingredients'>
          <input
           type="text" 
           onChange={(e)=> setNewIngredients(e.target.value)}
           value={newIngredients}
           />
           <button onClick={handleAdd} className='btn'>Add</button>
           </div>
        </label>
        <p>Current ingredients: { ingredients.map(i => <em key={i}>{i}  </em> )}</p>
        <label>
          <span>cook method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>time needed:</span>
          <input
           type="number" 
           onChange={(e)=> setCookingTime(e.target.value)}
           value={cookingTime}
           />
        </label>

        <button className='btn' >Submit</button>
      </form>
    </div>
  )
}
