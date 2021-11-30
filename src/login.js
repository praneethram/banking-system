import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
  const [userName, setuserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
      if(!userName) {
        setError('enter username')
      }
      else if(!password) {
          setError('enter password')
      }
      else {
          setError('')
          console.log(userName,password)

      }
  }
  return(
  <div className='loginBlock'>
  <h1>Login to banking system</h1>
  <p>username</p>
    <TextField 
         type='text'
         value={userName}
         onChange={(e)=> setuserName(e.target.value)}
    />
      <p>password</p>

    <TextField 
         type='password'
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
    />
    <p className='error'>{error}</p>
    <Button  className='loginButton' onClick={handleLogin}>
        Login
    </Button>
    <Button className='signupBtn'  onClick={()=> navigate('/signup')}>Signup</Button>
  </div>
  )
}
