  const reducer =  (state = [], action) => {
    switch (action.type){
      case 'INITS':{
        const newstate = action.data
        return newstate
      }
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
        const newstate= state.concat(action.data.anecdote)
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
  export const initializes =  (anecdote) => {
    const action = {
      type:'INITS',
      data:anecdote
    }
    return action
  }
  export default reducer