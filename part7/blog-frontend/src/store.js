import { combineReducers, createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducers'
const reducers = combineReducers({
  notification:notificationReducer
})
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store