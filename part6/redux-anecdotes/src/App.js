import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
 return (
    <>
    <h1><Notification/></h1>
    <AnecdoteList/>
    <AnecdoteForm/>
    </>
  )
}

export default App