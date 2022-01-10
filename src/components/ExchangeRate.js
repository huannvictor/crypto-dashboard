const ExchangeRate = ({ exchangedData }) => {
  return (
    <div className="exchangeRate">
      <h3>Exchange Rate</h3>
      <span id="evidencedValue">{exchangedData.exchangeRate}</span>
      <p>
        {exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
