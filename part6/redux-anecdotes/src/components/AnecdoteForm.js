import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdotes } from '../reducers/anecdoteReducer'
import { setnotification, removenotification } from '../reducers/notificationReducer'
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(addAnecdotes(anecdote))
        dispatch(setnotification(`you added ${anecdote}`))
        setTimeout(()=>{
         dispatch(removenotification())
        },5000)
      }
    
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div>
                <input
                name='anecdote' 
                />
            </div>
            <button type="submit">create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm