import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="appContainer">
      <h1>Crypto Dashboard</h1>
      <div className="appWrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
