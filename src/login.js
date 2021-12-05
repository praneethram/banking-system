import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



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
          axios
          .post('https://addf-223-238-51-144.ngrok.io/user/login', {
            userName: userName,
            password: password
          })
          .then((response) => {
            setError(response?.data?.errors[0])
            if(response.data) {
              localStorage.setItem('userInformation',JSON.stringify(response.data.data) )
              window.location.reload()
            }
                        
          });
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
