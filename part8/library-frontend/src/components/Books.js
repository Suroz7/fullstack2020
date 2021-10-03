import React, { useEffect, useState } from 'react'
import { gql, useQuery} from '@apollo/client'
const queryAllBooks = gql `
query {
  allBooks { 
    title 
    author{
      name
    }
    genres
    published 
  }
}
`
const me = gql `
query {
  who{
    username
    favoriteGenre
  }
}`
const Books = (props) => {
  const result = useQuery(queryAllBooks)
  const userresult = useQuery(me)
  const fg = !userresult.loading?userresult.data.who.favoriteGenre:'all'
  useEffect(()=>{
    if(!userresult.loading){
      setGenre(fg)
    }
  },[userresult.loading,fg])
  const [genre,setGenre] = useState('all')
  const genres = ["refactoring", "agile", "patterns", "design", "crime", "classic","Gaming", "all"]
  if (!props.show) {
    return null
  }
  if(result.loading || userresult.loading){
    return null
  }
  return (
    <div>
      <h2>books</h2>
      <table>
        <tbody>
          <tr>
            <th>
              Title
            </th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {genre==='all'?result.data.allBooks.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ):result.data.allBooks.map(a =>
            a.genres.includes(genre)&&<tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>)}
        </tbody>
      </table>
      <h2>Filter Books By {genre===userresult.data.who.favoriteGenre? `favourite Genre ${genre}`:genre }</h2>
      {genres.map(g=>(
        <button id={g} disabled={genres===g?true:false} key={g} onClick={()=>setGenre(g)}>{g}</button>
      ))}
      <button onClick={()=>setGenre(userresult.data.who.favoriteGenre)}>Favourite</button>
    </div>
  )
}

export default Books