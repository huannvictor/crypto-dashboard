import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="appContainer">
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
}

export default App;
