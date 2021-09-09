import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { votes,addAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedanecdoeds = anecdotes.sort((anecdoteA,anecdoteB) =>anecdoteB.votes-anecdoteA.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(votes(id))
  }
  const addAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(addAnecdotes(anecdote))
    console.log(anecdote);
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
      <AnecdoteForm addAnecdote={addAnecdote} />
    </div>
  )
}

export default App