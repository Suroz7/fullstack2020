import React, {  useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'
const App = () => {
  const [page, setPage] = useState('authors')
  const [token,setToken] = useState(null)
  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token&&<button onClick={() => setPage('add')}>add book</button>}
        {token?<button onClick={()=>{setToken(null)
           setPage('authors')
           localStorage.clear()}}>LogOut</button>:<button onClick={() => setPage('login')}>{token?'LogOut':'Login'}</button>}
      </div>

      <Authors
        show={page === 'authors'} token = {token}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'}
      />
      <LoginForm 
      show={page==='login'} token={token} settoken = {setToken}/>

    </div>
  )
}

export default App