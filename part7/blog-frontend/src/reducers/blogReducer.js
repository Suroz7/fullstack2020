import blogService from '../services/blogs'
const blogReducer = (state=[],action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  case 'NEW':
    return [...state,action.data]
  default:
    return state
  }
}
export default blogReducer

export const inits = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    const sortedblog = blogs.sort((blog1,blog2) => blog2.like-blog1.like)
    dispatch({
      type:'INIT',
      data:sortedblog
    })
  }
}

export const adds = (title,author,url,like) => {
  return async dispatch => {
    const newblog = await blogService.addNew(title,author,url,like)
    console.log(newblog)
    dispatch({
      type:'NEW',
      data:newblog.data
    })
  }
}