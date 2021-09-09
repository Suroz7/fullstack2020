const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const getId = () => (100000 * Math.random()).toFixed(0)
  
  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
  
  const initialState = anecdotesAtStart.map(asObject)
  
  const reducer = (state = initialState, action) => {
    switch (action.type){
      case 'VOTE':{
        const newstate = state.map((prevstate) => {
          if(prevstate.id===action.data.id){
          return  {...prevstate,
                  votes:prevstate.votes+1}
          }
          return prevstate
        })
        return newstate
      }
      case 'ADD':{
        const newstate  = state.concat({
          content:action.data.anecdote,
          id:getId(),
          votes:0
        })
        return newstate
      }
      
    }
  
    return state
  }
  export const votes = (id) => {
    const action={
      type:'VOTE',
      data:{id}
      }
    return action
  }
  export const addAnecdotes = (anecdote) =>{
    const action = {
      type:'ADD',
      data:{
        anecdote:anecdote
      }
    }
    return action
  }
  export default reducer