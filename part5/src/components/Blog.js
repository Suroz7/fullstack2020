import React, { useState } from 'react'
const Blog = ({blog}) => {
  const [showfulldetail,setshowfulldetail] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  return(
  <div style={blogStyle}>
    {blog.title} {blog.author} <button onClick={()=>setshowfulldetail(!showfulldetail)}>{showfulldetail?'Hide':'Show'}</button>
    <br/>
    {showfulldetail &&
    <div>
    {blog.url}
    <br/>
    likes : {blog.like}  <button>Like</button>
    </div>}
  </div>  
  )
  }

export default Blog