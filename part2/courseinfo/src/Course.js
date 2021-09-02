import React from 'react';
const Header = ({header}) =>{
    return(
      <h1>{header}</h1>
    )
  }
  const Part =({part,excercise,id})=>{
    return(
      <div>
        {part} : {excercise}
      </div>
    )
  }
  const Content = ({parts})=>{
     return parts.map((part)=>{
         return <Part key={part.id} part={part.name} excercise={part.excercies}/>
      })
    
   
  }
  
const Course = ({course})=>{
    return(
        <div>
            <Header  header = {course.name}/>
            <Content  parts={course.parts}/>
            
        </div>
    )
}

export default Course