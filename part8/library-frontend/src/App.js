import React, {  useEffect, useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'
const Errorshower = ({error}) => {  
  if ( !error ) {    
    return null  
  }  
  return (    
    <div style={{color: 'red'}}>    
    {error}    
    </div>  
    )
 }
const App = () => {
  const [page, setPage] = useState('authors')
  const [token,setToken] = useState(null)
  const [error, setError] = useState(null)
  const notifier = (message) => {    
    setError(message)    
    setTimeout(() => {      
      setError(null)    
    }, 7000)  
  }
  useEffect(()=>{
    const token = localStorage.getItem('library-user-token')
    if(token){
      setToken(token)
    }
  },[])
  return (
    <div>
      <Errorshower error={error} />
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token&&<button onClick={() => setPage('add')}>add book</button>}
        {token?<button onClick={()=>{setToken(null)
           setPage('authors')
           localStorage.clear()}}>LogOut</button>:<button onClick={() => setPage('login')}>{token?'LogOut':'Login'}</button>}
      </div>

      <Authors
        show={page === 'authors'} token = {token} notifier={notifier}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'} notifier={notifier}
      />
      <LoginForm 
      show={page==='login'} setPage={setPage} notifier={notifier} token={token} settoken = {setToken}/>

    </div>
  )
}

export default App