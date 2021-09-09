import React from 'react'
import { useDispatch } from 'react-redux'
import { handelFilterKey } from '../reducers/filterReducer'
const Filter = () =>{
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const newfilter = e.target.value
        dispatch(handelFilterKey(newfilter))
    }
    const style = {
        marginBottom:10
    }
    return (
        <div style={style}>
            Filter <input onChange={handleChange} />
        </div>
    )
}
export default Filter