import React ,{ useState } from 'react'
import service from '../services/blogs'
const AddBlog=(props) => {
  const { addHandler } = props
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')
  const [like,setLike] = useState('')
  const [showbf,setShowBf] = useState(true)
  const addHandleru = async (e) => {
    e.preventDefault()
    try {
      //await service.addNew(title,author,url,like)
      //type('success')
      //notification(`New Blog ${title} by ${author} is added succesfully`)
      addHandler({
        title,
        author,
        url
      })
      reloder()
      setTitle('')
      setUrl('')
      setAuthor('')
      setLike('')
      setShowBf(false)
      setTimeout(() => {
        type('')
        notification('')
      },5000)
    } catch (error) {
      return error
    }
  }
  if(showbf){
    return(
      <div>
        <h2>Add A New Blog</h2>
        <form onSubmit={addHandleru} id='addblog'>
          <label htmlFor='title'>Title:   </label>
          <input name='title'
            type="text"
            value ={title}
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <br/>
          <label htmlFor='author'>Author: </label>
          <input
            name='author'
            type='text'
            value ={author}
            id='author'
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br/>
          <label htmlFor='url'>Url: </label>
          <input
            name='url'
            type='text'
            value ={url}
            id='url'
            onChange={(e) => setUrl(e.target.value)}
          />
          <br/>
          <label htmlFor='like'>Likes: </label>
          <input
            name='like'
            type="number"
            value ={like}
            id='like'
            onChange={(e) => setLike(e.target.value)}
          />
          <br/>
          <button type='submit'>Create</button>
          <br/>
          <br/>
          <button onClick={() => setShowBf(false)}>Close </button>
        </form>
      </div>
    )
  }
  else{
    return(
      <button onClick={() => setShowBf(true)}>Create A new Blog </button>
    )
  }
}
export default AddBlog