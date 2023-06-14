import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    let ignore = false; // for the cleanup as explained in slide 12 - this ensures that the result is always valid, 
    //even if the fetch operation has a delay 

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(json => {
        const newExchangeRate = json.bitcoin[currency.toLowerCase()]; // since the currencies are in uppercase in the currencies 
        //array but need to be passed to the api in lowercase
        console.log('fetched exchange rate', json); 
        if (!ignore) setExchangeRate(newExchangeRate);
      });

    return () => {
        ignore = true;
        console.log('cleanup effect');
    } 
  }, [currency]);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
        >
          {options}
        </select>
      </label>
        <p>
          Exchange Rate for {currency}: {exchangeRate}
        </p>
    </div>
  );
}
