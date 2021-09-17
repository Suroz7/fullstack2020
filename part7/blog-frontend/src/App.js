import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'
import Notification from './components/Notifier'
import { connect, useDispatch } from 'react-redux'
import { inits } from './reducers/blogReducer'
import { adds, logouts } from './reducers/userReducer'
import Users from './components/Users'
import { setusers } from './reducers/usersReducer'
const App = (props) => {
  const dispatch = useDispatch()
  const [lstate,setLstate] = useState(false)
  const [user,setuser] = useState('')
  const logOutHandler =() => {
    window.localStorage.removeItem('logedinuser')
    setLstate(false)
    setuser('')
    dispatch(logouts())
  }
  useEffect(() => {
    const userunparsed = window.localStorage.getItem('logedinuser')
    if(userunparsed){
      const userprsed = JSON.parse(userunparsed)
      setLstate(true)
      setuser(userprsed.data.name)
      dispatch(adds(userprsed.data))
    }
    dispatch(inits())
    dispatch(setusers())
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
        <h2>Users In the System</h2>
        {props.users.map(user =>
          <Users key={user._id} user = {user} />
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  blogs:state.blog,
  users:state.users
})
const NewApp = connect(mapStateToProps)(App)
export default NewApp