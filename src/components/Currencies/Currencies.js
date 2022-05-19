import React from "react";
import "./Currencies.css";
import listOfCurrencies from "./list.json";
import { Link } from "react-router-dom";
function Currencies() {
  let list = listOfCurrencies.map((item) => {
    return (
      <div className="currency" key={item.currency}>
        <p>
          <Link to={`/currencies/${item.currency}`}>{item.currency}</Link> :{" "}
          {item.country}
        </p>
      </div>
    );
  });

  return <div>{list}</div>;
}

export default Currencies;