import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import products from "./data";
import Carrousel from "./components/Carrousel";
import Card from "./components/Card";

function App() {
  const [productAmount, setProductAmount] = useState(0);

  const productAmountHandler = (value) => {
    setProductAmount(value);
    console.log(productAmount);
  };

  const productAmountReset = (value) => {
    setProductAmount(value);
  };
  return (
    <div className="App">
      <Header
        onProductAmount={productAmount}
        data={products[0]}
        onProductAmountReset={productAmountReset}
      />
      <div className="container">
        <Carrousel data={products[0]} />
        <Card data={products[0]} onProductAmount={productAmountHandler} />
      </div>
    </div>
  );
}

export default App;
