import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'
import Notification from './components/Notifier'
import { connect, useDispatch } from 'react-redux'
import { inits } from './reducers/blogReducer'
const App = (props) => {
  const dispatch = useDispatch()
  const [lstate,setLstate] = useState(false)
  const [user,setuser] = useState('')
  const logOutHandler =() => {
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
    dispatch(inits())
  }, [])

  if(!lstate){
    return(
      <div>
        <Notification />
        <LoginForm what={setLstate} who={setuser} />
      </div>
    )
  }
  else{

    return (
      <div>
        <Notification />
        <p>{user} is Logged in</p>
        <button id="logout"onClick={logOutHandler}>LogOut</button>
        <br/>
        <AddBlog />
        <h2>blogs</h2>
        {props.blogs.map(blog =>
          <Blog key={blog._id} blog={blog}  />
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  blogs:state.blog
})
const NewApp = connect(mapStateToProps)(App)
export default NewApp