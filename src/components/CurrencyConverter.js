import { useState } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");

  console.log(chosenSecondaryCurrency);

  return (
    <div className="currencyConverter">
      <h2>Currency Converter</h2>

      <div className="inputBox">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency: </td>
              <td>
                <input type="number" name="currencyAmount1" value={""} />
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
                <input type="number" name="currencyAmount2" value={""} />
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
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
