import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function Deposit() {
  return (
    <div className='loginBlock depositBlock'>
    <h1>Deposit Money</h1>
    <p>Account Number</p>
      <TextField type="text" />
      <p>Enter Amount</p>
      <TextField type="text" />
      <p className='error' >Eoorr comews here</p>
      <Button className='depositBtn' >
          Deposit
      </Button>

    </div>
  );
}
