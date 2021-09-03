import React from 'react'
const ShowPerson=(props)=>{
    const {persons,filter,deleteNo} = props
    return(
        <div>
            {persons.map((person)=>{
         return( <div key={person.id}>
            {person.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase())?`${person.name} ${person.number}`:`` } 
            <button onClick={()=>deleteNo(person.id)}>Delete</button>
          </div>
         )
            }
          )
        }
        </div>
    )
}
export default ShowPerson