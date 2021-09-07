import React, { useState } from 'react'
import service from '../services/blogs'
const Blog = ({blog,reloder}) => {
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
  const like = async (blog)=>{
    await service.like(blog)
    reloder()
  }
  const deleteblog = async (blog)=>{
    if(window.confirm(`Do you really wanna delete ${blog.title } by ${blog.author}`)){
      await service.deleteblog(blog._id)
      reloder()
    }
  }
  return(
  <div style={blogStyle}>
    {blog.title} {blog.author} <button onClick={()=>setshowfulldetail(!showfulldetail)}>{showfulldetail?'Hide':'Show'}</button>
    <br/>
    {showfulldetail &&
    <div>
    {blog.url}
    <br/>
    likes : {blog.like}  <button onClick={()=>like(blog)}>Like</button>
    <br/>
    {blog.user.username===lusername&&
    <button onClick={()=>deleteblog(blog)} style={{color:'red'}}>Delete</button>
    }
    </div>
    }
  </div>  
  )
  }

export default Blog