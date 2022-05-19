import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Price.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

function Price(props) {
  const navigate = useNavigate();
  //useParams allows to grab parameters
  const { currencyName } = useParams(); //currencyName comes from the name defined in the Route
  const [currencyPrice, setCurrencyPrice] = useState(""); //need to update state
  console.log(currencyName, "this is currency name");

  //use async and await
  useEffect(() => {
    const url = `${coindeskURL}${currencyName}`; //generating the url
    props.setCurrencyAbbr(currencyName);
    async function fetchCurrencyPrice() {
      try {
        const response = await fetch(url);
        const data = await response.json(); //changes the response from JSON into a js object; parsing the JSON
        console.log(data, "data of currency");
        setCurrencyPrice(data.bpi[currencyName].rate); //update the state with the rate to be able to use the data
      } catch (err) {
        console.log(err, "error");
      }
    }

    fetchCurrencyPrice();
  }, [currencyName]); //runs when currencyName changes, and when page loads
  //make an API call
  return (
    <div>
      <h1>Bitcoin price in {currencyName} </h1>
      <div className="price">{currencyPrice}</div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/currencies")}>Currency List</button>
    </div>
  );
}

export default Price;
