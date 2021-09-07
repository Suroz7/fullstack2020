import React, { useState } from 'react'
import service from '../services/blogs'
const Blog = ({blog,reloder}) => {
  const [showfulldetail,setshowfulldetail] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const like = async (blog)=>{
    console.log('clikced')
    await service.like(blog)
    reloder()
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
    </div>}
  </div>  
  )
  }

export default Blog