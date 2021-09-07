import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'
import Notification from './components/Notifier'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [lstate,setLstate] = useState(false)
  const [user,setuser] = useState('')
  const [type,setType] = useState('')
  const [notification,SetNotification] = useState('')
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
      setuser(userprsed.data.name)
    }
    loadall() 
  }, [])

  if(!lstate){
    return(
      <div>
        {type && <Notification type={type} messages={notification}/>}
    <LoginForm what={setLstate} who={setuser} type={setType} notification={SetNotification}/>
    </div>
    )
  }
  else{

  return (
    
    <div>
      {type && <Notification type={type} messages={notification}/>}
      <p>{user} is Logged in</p> <button onClick={logOutHandler}>LogOut</button>
      <br/>
      <AddBlog reloder={loadall} type={setType} notification={SetNotification} />
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog._id} blog={blog} />
      )}
    </div>
  )
  }
}

export default App