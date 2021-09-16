import React ,{ useState } from 'react'
import service from '../services/blogs'
import { useDispatch } from 'react-redux'
import { setnotification } from '../reducers/notificationReducers'
const AddBlog=(props) => {
  const { reloder } = props
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')
  const [like,setLike] = useState('')
  const [showbf,setShowBf] = useState(false)
  const dispatch = useDispatch()
  const addHandler = async (e) => {
    e.preventDefault()
    try {
      await service.addNew(title,author,url,like)
      dispatch(setnotification({
        message:`New Blog ${title} by ${author} is added succesfully`,
        type:'success'
      },10))
      reloder()
      setTitle('')
      setUrl('')
      setAuthor('')
      setLike('')
      setShowBf(false)
    } catch (error) {
      return error
    }
  }
  if(showbf){
    return(
      <div>
        <h2>Add A New Blog</h2>
        <form onSubmit={addHandler}>
          <label htmlFor='title'>Title:   </label>
          <input
            id="title"
            name='title'
            type="text"
            value ={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br/>
          <label htmlFor='author'>Author: </label>
          <input
            id="author"
            name='author'
            type='text'
            value ={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br/>
          <label htmlFor='url'>Url: </label>
          <input
            id="url"
            name='url'
            type='text'
            value ={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <br/>
          <label htmlFor='like'>Likes: </label>
          <input
            id="like"
            name='like'
            type="number"
            value ={like}
            onChange={(e) => setLike(e.target.value)}
          />
          <br/>
          <button  id="create" type='submit'>Create</button>
          <br/>
          <br/>
          <button onClick={() => setShowBf(false)}>Close </button>
        </form>
      </div>
    )
  }
  else{
    return(
      <button className='btn' id="addblog" name="addblog"onClick={() => setShowBf(true)}>Create A new Blog </button>
    )
  }
}
export default AddBlog