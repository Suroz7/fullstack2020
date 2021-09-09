import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { votes } from "../reducers/anecdoteReducer"
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)
    const sortedanecdoeds = anecdotes.sort((anecdoteA,anecdoteB) =>anecdoteB.votes-anecdoteA.votes)
    const vote = (id) => {
      dispatch(votes(id))
    }
    return (
        <div>
        <h2>Anecdotes</h2>
        {sortedanecdoeds.map(anecdote =>
            <div key={anecdote.id}>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
        </div>
    )
}
export default AnecdoteList