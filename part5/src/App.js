import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [lstate,setLstate] = useState(false)
  const [user,setuser] = useState('')
  const loadall=async()=>{
    const response = await blogService.getAll()
    setBlogs(response)
  }
  const logOutHandler =()=>{
    window.localStorage.removeItem('logedinuser')
    setLstate(false)
    setuser('')
  }
  useEffect(() => {
    const userunparsed = window.localStorage.getItem('logedinuser')
    if(userunparsed){
      const userprsed = JSON.parse(userunparsed)
      setLstate(true)
      setuser(userprsed.name)
    }
    loadall() 
  }, [])

  if(!lstate){
    return(
    <LoginForm what={setLstate} who={setuser}/>
    )
  }
  else{

  return (
    
    <div>
      <p>{user} is Logged in</p> <button onClick={logOutHandler}>LogOut</button>
      <AddBlog reloder={loadall}/>
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog._id} blog={blog} />
      )}
    </div>
  )
  }
}

export default App