import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const addNew = async (title,author,url,like)=>{
  const token = JSON.parse(localStorage.getItem('logedinuser')).token
  const config={
    headers:{
      'Authorization':`bearer ${token}`,
    }
  }
  const newBlog={
    title:title,
    author:author,
    url:url,
    like:like
  }
  try {
    const response = await axios.post(`${baseUrl}`,newBlog,config)
    return response.data
  } catch (error) {
    return error
  }
  


}
const blog = {
  getAll,
  addNew
}

export default blog