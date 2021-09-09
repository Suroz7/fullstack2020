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
export const setnotification = (message) =>{
    const action = {
        type:'SET',
        data:message
    }
    return action
}
export const removenotification = () => {
    const action = {
        type:'REMOVE'
    }
    return action
}
