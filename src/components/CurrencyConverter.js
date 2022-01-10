import ExchangeRate from "./ExchangeRate"

const CurrencyConverter = () => {
  return (
    <div className="currencyConverter">
      <h2>Currency Converter</h2>

      <div className="inputBox">
        <table>
          <body>
            <tr>
              <td>Primary Currency: </td>
              <td>
                <input
                  type="number"
                  name="currencyAmount1"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={""}
                  name="currencyOption1" 
                  className="currencyOptions"
                >
                  <option></option>
                </select>
              </td>
            </tr>

            
            <tr>
              <td>Secondary Currency: </td>
              <td>
                <input
                  type="number"
                  name="currencyAmount2"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={""}
                  name="currencyOption2" 
                  className="currencyOptions"
                >
                  <option></option>
                </select>
              </td>
            </tr>
          </body>
        </table>
      </div>

      <ExchangeRate />
    </div>
  )
}

export default CurrencyConverter