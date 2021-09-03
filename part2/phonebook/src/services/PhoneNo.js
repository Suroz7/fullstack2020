import axios from 'axios'
const url='http://localhost:3001/persons'
const getAllNo =()=>{
    return axios.get(url)
    
}
const addNewNo = (newNo)=>{
  return axios.post(url,newNo)
    
}
const deleteNo = (id)=>{
    return axios.delete(`${url}/${id}`)
}
const updateNo =(id,newPerson)=>{
    return axios.put(`${url}/${id}`,newPerson)
}
const services =  {
    getAllNo,
    addNewNo,
    deleteNo,
    updateNo
}
export default services