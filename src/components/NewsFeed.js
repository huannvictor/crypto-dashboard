import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news15.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news15.p.rapidapi.com",
        "x-rapidapi-key": "4f44b2b4famsh9851d3135c14023p1d68aajsn8515efd61176",
      },
    };

    axios
      .request(options)
      .then(response => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(articles);

  return <div className="newsFeed">Here is the news baby!</div>;
};

export default NewsFeed;
