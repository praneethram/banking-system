import { Button, TextField } from "@material-ui/core";
import React from "react";
import axios from "axios";


export default function Transfer() {
    const [amount, setAmount] = React.useState("");
    const [accountId, setAccountId] = React.useState("");
    const [message, setmessage] = React.useState("");
    const [accountInfo, setAccountInfo] = React.useState(null);

    const trasnfer = () => {
        if(!accountInfo) {
            axios
          .get(`https://addf-223-238-51-144.ngrok.io/user/account?accountnumber=${accountId}`)
          .then((response) => {
              setAccountInfo(response.data?.data)
              setmessage(response.data?.errors[0])
            console.log("🚀 ~ file: transfer.js ~ line 17 ~ .then ~ response", response)
          });
        }
        else {
            axios
            .post('https://addf-223-238-51-144.ngrok.io/user/account/transfer', {
                    fromAccountId: JSON.parse(localStorage.getItem('userInformation')).accountId,
                    toAccountId: parseInt(accountInfo?.accountId),
                    amount: parseInt(amount)
            })
            .then((response) => {
              console.log("🚀 ~ file: transfer.js ~ line 30 ~ .then ~ response", response)
              setmessage(response?.data?.data)
            setTimeout(() => {
              window.location.reload()
            },3000)
            });
        }
        
    }


  return (
    <div className='loginBlock depositBlock'>
    <h1>Transfe Money</h1>
    <p>Account Id</p>
      <TextField type="number" value={accountId} onChange={(e)=> setAccountId(e.target.value) }/>
        
      {accountInfo && <>
        <p>Name : {accountInfo?.firstName}</p>
       <p>Enter Amount $</p>
    <TextField type="number" value={amount} onChange={(e)=> setAmount(e.target.value) }/>
      </>}
      <p className='error' >{message}</p>
      <Button className='depositBtn' onClick={trasnfer}>
          Transfer
      </Button>

    </div>
  );
}
