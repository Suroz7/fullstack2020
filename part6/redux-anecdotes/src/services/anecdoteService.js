import axios from 'axios'
const base_url = 'http://localhost:3001/anecdotes'
const getAll = async ()=>{
    const response = await axios.get(base_url)
    return response.data
}
const addNew = async (anecdote) => {
    const response = await axios.post(base_url,anecdote)
    return response.data

}
const service = {
    getAll:getAll,
    addNew:addNew
}
export default service