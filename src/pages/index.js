import Navigation from "../components/Navigation";
import Calculator from "../components/Calculator";
import { useState } from "react";

const MainPage = () => {
  const [currency, setCurrency] = useState('USD');

  const getCurrency = (cur) => {
    setCurrency(cur)
  }

  return (
    <>
      <Navigation getCurrency={getCurrency} />
      <Calculator currency={currency} />
    </>
  )
};

export default MainPage;