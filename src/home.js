import { AppBar, Box, Button, Card, CardActions, CardContent, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Deposit from "./deposit";
import Transaction from "./transactions";
import axios from "axios";
import Transfer from "./transfer";



export default function Home() {
  const [display, setDisplay] = React.useState("");
  const [accountInfo, setaccountInfo] = React.useState(JSON.parse(localStorage.getItem('userInformation')));


  React.useEffect(()=> {
    getAccountDetails()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const getAccountDetails = () => {
           axios
          .get(`https://addf-223-238-51-144.ngrok.io/user/account?accountnumber=${accountInfo?.accountNumber}`)
          .then((response) => {
            localStorage.setItem('userInformation',JSON.stringify(response.data?.data) )
            setaccountInfo(response.data?.data)
          });
  }

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hi {accountInfo?.firstName} (A/C :{accountInfo?.accountNumber}) 
            </Typography>
            <Button color="inherit" onClick={logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2} className="cardsBlock">
        <Grid item xs={6}>
            <Card>
                <CardContent className="cardContent">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Account Balance (ID :{accountInfo?.accountId})
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                : $ {accountInfo?.amount}
                </Typography>
                </CardContent>
                <CardActions className='cardAction'>
                    <Button size="small" onClick={()=> setDisplay('transaction')}>Click here for transaction</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card>
                <CardContent className="cardContent">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Deposit money
                </Typography>
                </CardContent>
                <CardActions className='cardAction'>
                    <Button size="small" onClick={()=> setDisplay('deposit')}>click here to deposit</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={3}>
            <Card>
                <CardContent className="cardContent">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Transfer Money
                </Typography>
                </CardContent>
                <CardActions className='cardAction'>
                <Button size="small" onClick={()=> setDisplay('transfer')}>click here to trasfer</Button>
                </CardActions>
            </Card>
        </Grid>
       
      </Grid>
      {display === 'transaction'&&  <Transaction />}
      {display === 'deposit'&&  <Deposit />}
      {display === 'transfer'&&  <Transfer />}

    </div>
  );
}
