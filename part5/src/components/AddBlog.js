import React ,{useState} from 'react'
import service from '../services/blogs'
const AddBlog=(props)=>{
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [url,setUrl] = useState('')
    const [like,setLike] = useState('')
    const addHandler = async (e)=>{
        e.preventDefault()
        await service.addNew(title,author,url,like)
        props.reloder()
        setTitle('')
        setUrl('')
        setAuthor('')
        setLike('')
    }
    return(
        <div>
            <h2>Add A New Blog</h2>
            <form onSubmit={addHandler}>
                <label htmlFor='title'>Title:   </label>
                <input 
                name='title'
                type="text"
                value ={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <br/>
                <label htmlFor='author'>Author: </label>
                <input 
                name='author'
                type='text'
                value ={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
                <br/>
                <label htmlFor='url'>Url: </label>
                <input 
                name='url'
                type='text'
                value ={url}
                onChange={(e)=>setUrl(e.target.value)}
                />
                <br/>
                <label htmlFor='like'>Likes: </label>
                <input 
                name='like'
                type="number"
                value ={like}
                onChange={(e)=>setLike(e.target.value)}
                />
                <br/>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}
export default AddBlog