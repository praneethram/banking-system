import { Button, TextField } from "@material-ui/core";
import React from "react";
import axios from "axios";


import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userName, setuserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState('');
  

  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!userName) {
      setError("enter username");
    } else if (!password) {
      setError("enter password");
    } else if (!email) {
      setError("enter email");
    } else if (!phone) {
      setError("enter phone");
    } else {
      setError("");
      setuserName("");
      setPassword("");
      setEmail("");
      setPhone("");
      axios
      .post('https://addf-223-238-51-144.ngrok.io/user', {
        firstname: userName,
        lastname: null,
        email: email,
        phone: phone,
        password : password,
        role: 'ACCOUNTHOLDER',
        address1: null,
        address2: null,
        pincode: null,
        gender: 'Male'
      })
      .then((response) => {
        setError(response?.data?.data ? response?.data?.data : response?.data?.errors[0])
      });
    }
  };
  return (
    <div className='loginBlock'>
      <h1>Signup to banking system</h1>
      <p>username</p>
      <TextField
        type="text"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <p>password</p>

      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>email</p>

      <TextField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>phone</p>

      <TextField
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <p className='error' >{error}</p>
      <Button  className='signupBtn' onClick={handleLogin}>Signup</Button>
      <Button  className='backtoLoginBtn' onClick={() => navigate("/")}>back to login</Button>
    </div>
  );
}
