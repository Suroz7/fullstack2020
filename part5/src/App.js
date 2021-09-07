import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [lstate,setLstate] = useState(false)
  const [user,setuser] = useState('')

  useEffect(() => {
    const userunparsed = window.localStorage.getItem('logedinuser')
    const userprsed = JSON.parse(userunparsed)
    if(userunparsed){
      setLstate(true)
      setuser(userprsed.name)
    }
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
  const logOutHandler =()=>{
    window.localStorage.removeItem('logedinuser')
    setLstate(false)
    setuser('')
  }
  if(!lstate){
    return(
    <LoginForm what={setLstate} who={setuser}/>
    )
  }
  else{

  return (
    
    <div>
      <p>{user} is Logged in</p> <button onClick={logOutHandler}>LogOut</button>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog._id} blog={blog} />
      )}
    </div>
  )
  }
}

export default App