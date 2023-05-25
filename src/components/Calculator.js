import * as React from 'react';
import { TextField, Container, Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Calculator = ({ currency }) => {
  const coefficientValues = [
    {
      name: 'USD',
      coefficient: 1,
    },
    {
      name: 'EUR',
      coefficient: 1.1,
    },
    {
      name: 'GBP',
      coefficient: 1.4,
    }
  ]
  const itemPrice = 10;
  const currentCoefficient = coefficientValues.find((item) => item.name === currency)?.coefficient;
  const amountRef = useRef(null);

  const [calculatedPrice, setCalculatedPrice] = useState(null);

  useEffect(() => {
    if (currency) {
      const price = (amountRef.current * itemPrice * currentCoefficient).toFixed(0);
      setCalculatedPrice(price);
    }
  }, [currency, currentCoefficient, itemPrice])

  const handleAmountChange = (event) => {
    const { value } = event.target;
    amountRef.current = value;
    const price = (itemPrice * currentCoefficient * value).toFixed(0);
    setCalculatedPrice(price);
  }

  return (
    <Container maxWidth="xl" sx={{ paddingInline: { xs: '20px !important', md: '70px !important' }, marginTop: 2 }}>
      <Box component="h5">Calculate price</Box>
      <TextField
        label="Amount"
        placeholder="Enter amount"
        variant="outlined"
        type="number"
        onChange={handleAmountChange}
        sx={{ mr: 2, width: { xs: '100%', md: '300px',  marginBottom: '20px' } }}
      />
      <TextField
        label="Price"
        variant="outlined"
        disabled
        type="number"
        value={calculatedPrice}
        sx={{ width: { xs: '100%', md: '300px', marginBottom: '10px' } }}
        InputProps={{
          startAdornment: (
            <Box component="span" sx={{ color: '#ccc', fontSize: '14px', marginRight: 1 }}>{currency}:</Box>
          )
        }}
      />
    </Container>
  )
};

export default Calculator;