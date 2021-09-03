import React,{useState} from 'react';
import AddPerson from'./Components/Addperson'
import FilterPerson  from './Components/FilterPerson';
import ShowPerson from './Components/ShowPerson';
const App=()=>{
  const [persons,setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName,setNewname] = useState('')
  const [newNo,setNewNo] = useState('')
  const [filter,setFilter] = useState('')
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
      <ShowPerson persons={persons} filter={filter}/>
      </div>
    </div>
  )
}
export default App