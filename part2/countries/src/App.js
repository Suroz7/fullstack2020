import React,{useState,useEffect} from 'react'
import axios from 'axios'
const App=()=>{
  const [countries,setCountries] = useState([])
  const [keyword,setKeyword] = useState('')
  const [filteredout,seFilteredOut] = useState([])
  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>{
      setCountries(response.data)
    })
  },[])
  const searchhandler=(e)=>{
    setKeyword(e.target.value)
    const dd = countries.filter((country)=>
      country.name.toUpperCase().includes(keyword.toUpperCase())
    )
    seFilteredOut(dd)
    
  }
  return(
    <div>
     Find Countries:<input onChange={searchhandler}/>
     
     <div>
       {keyword===''?`Enter a keyword`:filteredout.length>10?`Too Many matches ,spcify another filter`:filteredout.length===1?
       <div key={filteredout[0].name}>
         <h1>{filteredout[0].name}</h1>
         Capital {filteredout[0].capital}
         <h2>Languages</h2>
         <ul>
           {filteredout[0].languages?filteredout[0].languages.map((fif)=><li>{fif.name}</li>):`No language avilable`}
         </ul>
         <h1>Flag</h1>
         <img src={filteredout[0].flag} alt="Contry flag"></img>
       </div>
       :filteredout.map((filter)=><h4 key={filter.name}>{filter.name}</h4>)}
     </div>
    </div>
    
  )
}
export default App