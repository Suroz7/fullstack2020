import React from 'react'
const ShowPerson=(props)=>{
    const {persons,filter} = props
    return(
        <div>
            {persons.map((person)=>{
         return( <div key={person.name}>
            {person.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase())?`${person.name} ${person.number}`:`` } 
          </div>
         )
            }
          )
        }
        </div>
    )
}
export default ShowPerson