import React,{useState} from 'react'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [indexs,setIndexs] = useState(0)
  const [points,setPoints] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  })
  
  const clickHandler = ()=>{
    const random = Math.floor((Math.random()*6)+1)
    setIndexs(random)
  }
  const voteHandler = ()=>{
    setPoints({...points,[indexs]:points[indexs]+1})
  }
  return(
    <div>
      {anecdotes[indexs]}
      <p>has {points[indexs]} vote</p>
      <br></br>
     <button onClick={voteHandler}>Vote</button> <button onClick={clickHandler}>Next anecdotes</button>
    </div>
  )
}
export default App