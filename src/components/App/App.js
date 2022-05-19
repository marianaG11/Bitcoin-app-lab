import React, { useState } from "react";
import Home from "../Home/Home";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Currencies from "../Currencies/Currencies";
import Price from "../Price/Price";

function App() {
  const [price, setPrice] = useState(null);

  const handleClick = (price) => {
    setPrice(price);
  };

  //need to lift the currency name from Currency to App
  //so we need to pass down a function
  const [currencyAbbr, setCurrencyAbbr] = useState("");
  return (
    <div>
      <nav>
        {/* to clear the previous value when we are on /currencies or home / route ; add onCLick event to both Links */}
        <Link to="/" onClick={() => setCurrencyAbbr("")}>
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
        </Link>
        <Link to="/currencies" onClick={() => setCurrencyAbbr("")}>
          Currency List {currencyAbbr ? "> " + currencyAbbr : ""}
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
          {/* include a url parameter: currencyName is the parameter */}
          <Route
            path="/currencies/:currencyName"
            element={<Price setCurrencyAbbr={setCurrencyAbbr} />} //passing down the routerProps
          />
          {/* catch all *, goes at the END of the routes; order here matters */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;