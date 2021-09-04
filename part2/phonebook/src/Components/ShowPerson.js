import React from 'react'
const ShowPerson=(props)=>{
    const {persons,filter,deleteNo} = props
    return(
        <div>
            {persons.map((person)=>{
            
         return( <div key={person._id}>
         	{console.log(person._id)}
            {person.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase())?`${person.name} ${person.number}`:`` } 
            <button onClick={()=>deleteNo(person._id)}>Delete</button>
          </div>
         )
            }
          )
        }
        </div>
    )
}
export default ShowPerson
