import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  console.log(amount);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(response => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount,
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  console.log(exchangeRate);

  return (
    <div className="currencyConverter">
      <h2>Currency Converter</h2>

      <div className="inputBox">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency: </td>
              <td>
                <input
                  type="number"
                  name="currencyAmount1"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currencyOption1"
                  className="currencyOptions"
                  onChange={e => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency: </td>
              <td>
                <input 
                  type="number" 
                  name="currencyAmount2" 
                  value={result} 
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currencyOption2"
                  className="currencyOptions"
                  onChange={e => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}> {currency} </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convertButton" onClick={convert}>
          Convert
        </button>
      </div>

      <ExchangeRate 
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={chosenPrimaryCurrency}
        chosenSecondaryCurrency={chosenSecondaryCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
