import React,{useState,useEffect} from 'react';
import AddPerson from'./Components/Addperson'
import FilterPerson  from './Components/FilterPerson';
import ShowPerson from './Components/ShowPerson';
import axios from 'axios'
const App=()=>{
  const [persons,setPersons] = useState([])
  const [newName,setNewname] = useState('')
  const [newNo,setNewNo] = useState('')
  const [filter,setFilter] = useState('')
  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response=>{
      console.log('data loaded')
      setPersons(response.data)
    })
  },[])
  const addPerson = (e)=>{
    e.preventDefault()
    const checker = persons.filter((person)=>person.name===newName)
    if(checker.length>0){
      alert(`${newName} is already in the list`)
    }
    else{
      setPersons(persons.concat({name:newName,number:newNo}))
      
    }
    
  }
  const handelNameChange=(e)=>{
    setNewname(e.target.value)
  }
  const handelNoChange=(e)=>{
    setNewNo(e.target.value)
  }
  const handelFilterChange=(e)=>{
    setFilter(e.target.value)
  }
  return (
    <div>
      <h1>PhoneBook</h1>
      <FilterPerson handelFilterChange={handelFilterChange}/>
      <br></br>
      <AddPerson addPerson={addPerson} handelNoChange={handelNoChange} handelNameChange={handelNameChange}/>
      <div>
        <h1>Numbers</h1>
      <ShowPerson persons={persons} filter={filter
      }/>
      </div>
    </div>
  )
}
export default App