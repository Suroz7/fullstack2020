import { combineReducers, createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducers'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
const reducers = combineReducers({
  notification:notificationReducer,
  blog:blogReducer,
  user:userReducer
})
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
export default store