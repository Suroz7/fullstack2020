const initialState = ''
const reducer = (state=initialState,action) =>{
    switch(action.type){
        case 'SET':
            return action.data
        case 'REMOVE':
            return ''
        default:
            return state
    }
}
export default reducer
export const setnotification = (message,time) =>{
    return async dispatch => {
        dispatch({
            type:'SET',
            data:message
        })
        setTimeout(() => {
            dispatch({
                type:'REMOVE'
            })
        }, time*1000)
    }
    
}
