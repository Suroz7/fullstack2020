import { combineReducers, createStore }  from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
console.log(anecdoteReducer)
const store = createStore(
    anecdoteReducer,
    composeWithDevTools()
)
export default store