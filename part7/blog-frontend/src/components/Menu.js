import React from 'react'
import { connect, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { logouts } from '../reducers/userReducer'
const Menu = (props) => {
  const dispatch = useDispatch()
  if(!props.user){
    return(
      null
    )
  }
  const { username } = props.user
  const logOutHandler =() => {
    window.localStorage.removeItem('logedinuser')
    props.ls(false)
    dispatch(logouts())
  }
  return (
    <div>
      <Link to='/'>Home </Link>
      <Link to='/blogs'>Blogs </Link>
      <Link to='/users'>Users  </Link>
      {`${username} is LoggedIn  `}
      <button id="logout"onClick={logOutHandler}>LogOut</button>

    </div>
  )
}
const mapStateToProps = (state) => ({
  user:state.user
})
const NewMenu = connect(mapStateToProps)(Menu)
export default NewMenu