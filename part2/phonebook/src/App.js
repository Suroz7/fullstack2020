import React,{useState} from 'react';
const App=()=>{
  const [persons,setPersons] = useState([
    {name:"Suroz Suroz",number:'9800000000'}
  ])
  const [newName,setNewname] = useState('')
  const [newNo,setNewNo] = useState('')
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
  return (
    <div>
      <h1>PhoneBook</h1>
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
            {person.name} {person.number}<br></br>
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