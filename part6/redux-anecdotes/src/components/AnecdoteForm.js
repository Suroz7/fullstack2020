import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdotes } from '../reducers/anecdoteReducer'
import { setnotification, removenotification } from '../reducers/notificationReducer'
import service from '../services/anecdoteService'
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (e) => {
        e.preventDefault()
        const getId = () => (100000 * Math.random()).toFixed(0)
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        const response = await service.addNew({
            content:anecdote,
            id:getId(),
            votes:0
        })

        dispatch(addAnecdotes(response))
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