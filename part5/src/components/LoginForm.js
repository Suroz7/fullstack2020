import React ,{useState} from 'react'
import login from '../services/login'
const LoginForm = (props)=>{
const {what,who} =props
const [username,setUsername] = useState('')
const [password,setPassword]= useState('')
const handleLogin = async(e)=>{
    e.preventDefault()
    console.log(username,password)
    const response = await login.login(username,password)
    console.log(response,'hello')
    if(response.token){
        what(true)
        who(response.name)
    }
}
return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          Username:
          <input
            id="username"
            type="text"
            value={username}
            name="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Password:
          <input
            id="password"
            type="password"
            value={password}
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id="login-btn" type="submit">Login</button>
      </form>
    </div>
  )


}
export default LoginForm