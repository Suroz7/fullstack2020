import React,{useState} from 'react';
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
      filter shown with :<input onChange={handelFilterChange}/>
      <br></br>
      <h1>Add New No </h1>
      <form onSubmit={addPerson} >
        <div>
          Name:<input type="text"  name='name' onChange={handelNameChange}/>
        </div>
        <br></br>
        <div>
          Number:<input type="number" name="number" onChange={handelNoChange}/>
        </div>
        
        <div>
          <button type="submit" >Add</button>
        </div>
      </form>
      <div>
        <h1>Numbers</h1>
      {persons.map((person)=>{
         return( <div key={person.name}>
            {person.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase())?`${person.name} ${person.number}`:`` } 
          </div>
         )
            }
          )
        }
      </div>
    </div>
  )
}
export default App