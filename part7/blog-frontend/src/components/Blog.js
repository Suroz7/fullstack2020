import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { delets, likes } from '../reducers/blogReducer'
import {  Redirect, useParams } from 'react-router'
const Blog = ({ blog }) => {
  const id = useParams().id
  const which = blog.find(blog => blog._id===id)
  if(which===undefined){
    return <Redirect to='/'/>
  }
  const token = JSON.parse(localStorage.getItem('logedinuser'))
  const lusername = token.data.username
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const dispatch = useDispatch()
  const like = async (blog) => {
    dispatch(likes(blog))
  }
  const deleteblog = async (blog) => {
    if(window.confirm(`Do you really wanna delete ${blog.title } by ${blog.author}`)){
      dispatch(delets(blog._id))
    }
  }
  return(
    <div id="list" style={ blogStyle }>
      { which.title } { which.author }
      <br/>
      <div>
        {which.url}
        <br/>
    likes : {which.like}  <button id="like" onClick={() => like(which)}>Like</button>
        <br/>
        {which.user.username===lusername&&
    <button id="delete" onClick={ () => deleteblog(which) } style={ { color:'red' } }>Delete</button>
        }
      </div>
    </div>
  )
}
Blog.propTypes={
  blog:PropTypes.array.isRequired,
}
export default Blog