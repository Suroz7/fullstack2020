import React from 'react';
import Course from './Course'

const App = () =>{
  const course = {
    id:1,
    name:'Half Stack application development',
    parts: [
      {
      name:'Fundamentals of React',
      excercies : 10,
      id:1
    },
      {
      name:'Using props to pass data',
      excercies:7,
      id:2
    },
      {
      name:'State of a component',
      excercies:14,
      id:3
    },
    {
      name:'Redux',
      excercies:11,
      id:4
    }
  ]
  
  
  }

  
    return(
      <div>
      <Course course={course}/>
      </div>
    )
  
}


export default App