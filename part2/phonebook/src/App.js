import React,{useState} from 'react';
const App=()=>{
  const [persons,setPersons] = useState([
    {name:"Suroz Suroz"}
  ])
  const [newName,setNewname] = useState('')
  const addPerson = (e)=>{
    e.preventDefault()
    setPersons(persons.concat({name:newName}))
    console.log(persons)
    
  }
  const handelChange=(e)=>{
    setNewname(e.target.value)
  }
  return (
    <div>
      <h1>PhoneBook</h1>
      <form onSubmit={addPerson} >
        <div>
          Name:<input type="text"  name='name' onChange={handelChange}/>
        </div>
        <div>
          <button type="submit" >Add</button>
        </div>
      </form>
      <div>
        <h1>Numbers</h1>
      {persons.map((person)=>{
         return( <div key={person.name}>
            {person.name}<br></br>
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