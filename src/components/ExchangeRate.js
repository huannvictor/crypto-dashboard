const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
  return (
    <div className="exchangeRate">
      <h3>Exchange Rate</h3>
      <span id="evidencedValue">{exchangeRate}</span>
      <p>
        {chosenPrimaryCurrency} to {chosenSecondaryCurrency}
      </p>

    </div>
  )
}

export default ExchangeRate