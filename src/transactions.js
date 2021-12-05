import React from "react";
import {
  Table,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
} from "@material-ui/core";
import axios from "axios";



export default function Transaction() {
  const [transactionsList, settransactionsList] = React.useState([]);
  const accountId = JSON.parse(localStorage.getItem('userInformation')).accountId
  React.useEffect(()=> {
    getTransactionsList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const getTransactionsList = () => {
           axios
          .get(`https://addf-223-238-51-144.ngrok.io/user/account/history?userid=${accountId}`)
          .then((response) => {
          console.log("🚀 ~ file: transactions.js ~ line 27 ~ .then ~ response", response)

            settransactionsList(response.data?.data)
          });
  }

  return (
    <div className="transactionTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>From Account</TableCell>
              <TableCell >To Account</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsList.length > 0 ?  transactionsList.map((row,id) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {row.fromAccountNumber}
                </TableCell>
                <TableCell align="right">{row.toAccountNumber}</TableCell>
                <TableCell align="right">${row.amount}</TableCell>
              </TableRow>
            )) : <TableRow ><p>No records found</p></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
