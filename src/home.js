import { AppBar, Box, Button, Card, CardActions, CardContent, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Deposit from "./deposit";
import Transaction from "./transactions";

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              YOUR ACCOUNT
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2} className="cardsBlock">
        <Grid item xs={6}>
            <Card>
                <CardContent className="cardContent">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Account Balance
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                : $ 0.211
                </Typography>
                </CardContent>
                <CardActions className='cardAction'>
                    <Button size="small">Click here for transaction</Button>
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
                    <Button size="small">click here to deposit</Button>
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
                <Button size="small">click here to trasfer</Button>
                </CardActions>
            </Card>
        </Grid>
       
      </Grid>
      {/* <Transaction /> */}
      <Deposit />
    </div>
  );
}
