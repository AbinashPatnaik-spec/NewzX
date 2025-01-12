import React, { useEffect, useState } from "react";
import axios from "axios";
import news21 from "./news_211.jpg";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_NEWS_API;
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  if (loading)
    return (
      <center>
        <div class="spinner-border my-3" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </center>
    );
  if (error)
    return (
      <center>
        <div className="my-3">Error in fetching: {error}</div>
      </center>
    );
  return (
    <div
      className="container-fluid"
      style={{ backgroundImage: `url(${news21})`, display: "inline-block" }}
    >
      <div className="container my-3">
        <center>
          <h4 className="text-light">Top Headlines</h4>
        </center>
        <div className="row">
          {news.map((article, index) => (
            <div className="col-md-6 my-2" key={index}>
              <div className="card" key={index}>
                <div class="card-body" key={index}>
                  <h4 class="card-title">{article.title}</h4>
                  <p class="card-text">{article.description}</p>
                  <a
                    className="badge text-bg-info"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
