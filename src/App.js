import "./App.css";
import React, { useState } from "react";

import Section from "./assets/Components/Section";
import Result from "./assets/Components/Result";

function App() {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);

  const [priceOne, setPriceOne] = useState(106700);
  const [priceTwo, setPriceTwo] = useState(1000);
  // console.log(priceOne);
  //console.log(priceTwo);

  return (
    <div className="container">
      <h1>Tesla Config</h1>
      <Section
        select={select1}
        setSelect={setSelect1}
        title="Sélectionnez votre véhicule"
        option1="Grande autonomie"
        price1="90 700"
        option2="Performance"
        price2="106 700"
        setPrice={setPriceOne}
      />
      <Section
        select={select2}
        setSelect={setSelect2}
        title="Sélectionnez la couleur"
        option1="Blanc nacré multicouches"
        price1=" 0"
        option2="Noir uni"
        price2="1000"
        setPrice={setPriceTwo}
      />
      <Result prix1={priceOne} prix2={priceTwo} />
    </div>
  );
}

export default App;
