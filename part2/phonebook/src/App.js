import React,{useState,useEffect} from 'react';
import AddPerson from'./Components/Addperson'
import FilterPerson  from './Components/FilterPerson';
import ShowPerson from './Components/ShowPerson'
import service from './services/PhoneNo'
const App=()=>{
  const [persons,setPersons] = useState([])
  const [newName,setNewname] = useState('')
  const [newNo,setNewNo] = useState('')
  const [filter,setFilter] = useState('')
  useEffect(()=>{
    service.getAllNo()
    .then(response=>{
      setPersons(response.data)
    })
  },[])
  const addPerson = (e)=>{
    e.preventDefault()
    const checker = persons.filter((person)=>person.name===newName)
    if(checker.length>0){
      
      if(window.confirm(`${newName} is already in phone book wanna update the phone no`)){
        service.updateNo(getPersonId(newName)[0].id,{name:newName,number:newNo})
        .then(service.getAllNo)
        .then((response)=>setPersons(response.data))
      }
    }
    else{
      service.addNewNo({name:newName,number:newNo})
      .then(service.getAllNo)
      .then((response)=>setPersons(response.data))
      
    }
    
  }
  const getPersonname=(id)=>{
    return persons.filter((person)=>person.id===id)
  }
  const getPersonId=(name)=>{
    return persons.filter((person)=>person.name===name)
  }
  const deletePerson =(id)=>{
    if(window.confirm(`Do You Really wanna delete ${getPersonname(id)[0].name} `)){
      service.deleteNo(id)
      .then(service.getAllNo)
      .then((response)=>setPersons(response.data))
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
      <ShowPerson persons={persons} deleteNo={deletePerson} filter={filter}/>
      </div>
    </div>
  )
}
export default App