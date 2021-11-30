import { Button, TextField } from "@material-ui/core";
import React from "react";

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
      console.log(userName, password);
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
