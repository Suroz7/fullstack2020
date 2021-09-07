import React ,{useState} from 'react'
import service from '../services/blogs'
const AddBlog=(props)=>{
    const {reloder,type,notification} = props
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [url,setUrl] = useState('')
    const [like,setLike] = useState('')
    const addHandler = async (e)=>{
        e.preventDefault()
        try {
           const response =  await service.addNew(title,author,url,like)
           console.log(response,'helo') 
           type('success')
            notification(`New Blog ${title} by ${author} is added succesfully`)
            reloder()
            setTitle('')
            setUrl('')
            setAuthor('')
            setLike('')
            setTimeout(()=>{
                type('')
                notification('')
            },5000)
        } catch (error) {
            
        }
        
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