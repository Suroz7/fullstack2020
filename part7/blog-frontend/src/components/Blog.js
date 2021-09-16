import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { delets, likes } from '../reducers/blogReducer'
const Blog = ({ blog }) => {
  const token = JSON.parse(localStorage.getItem('logedinuser'))
  const lusername = token.data.username
  const [showfulldetail,setshowfulldetail] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const dispatch = useDispatch()
  const like = async (blog) => {
    setshowfulldetail(false)
    dispatch(likes(blog))
    setshowfulldetail(true)
  }
  const deleteblog = async (blog) => {
    if(window.confirm(`Do you really wanna delete ${blog.title } by ${blog.author}`)){
      dispatch(delets(blog._id))
    }
  }
  return(
    <div id="list" style={ blogStyle }>
      { blog.title } { blog.author } <button  id="sd" onClick={() => setshowfulldetail(!showfulldetail)}>{showfulldetail?'Hide':'Show'}</button>
      <br/>
      {showfulldetail &&
    <div>
      {blog.url}
      <br/>
    likes : {blog.like}  <button id="like" onClick={() => like(blog)}>Like</button>
      <br/>
      {blog.user.username===lusername&&
    <button id="delete" onClick={ () => deleteblog(blog) } style={ { color:'red' } }>Delete</button>
      }
    </div>
      }
    </div>
  )
}
Blog.propTypes={
  blog:PropTypes.object.isRequired,
}
export default Blog