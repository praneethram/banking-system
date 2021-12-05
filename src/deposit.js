import { Button, TextField } from "@material-ui/core";
import React from "react";
import axios from "axios";


export default function Deposit() {
  const [amount, setAmount] = React.useState("");

  
  const accountInformation = JSON.parse(localStorage.getItem('userInformation'))


  const depositAmount = () => {
    axios
      .post('https://addf-223-238-51-144.ngrok.io/user/account/deposit', {
          accountId: accountInformation?.accountId,
          amount: amount
      })
      .then((response) => {
        window.location.reload()
      });
  }

  return (
    <div className='loginBlock depositBlock'>
    <h1>Deposit Money</h1>
      <p>Enter Amount $</p>
      <TextField type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <Button className='depositBtn' onClick={depositAmount} >
          Deposit
      </Button>

    </div>
  );
}
