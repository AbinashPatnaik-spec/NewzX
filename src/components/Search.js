import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = process.env.REACT_APP_NEWS_API;
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
      );
      setSearchResults(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div class="card text-bg-primary text-center">
            <div class="card-header">
              <h5>Search News</h5>
            </div>
            <div class="card-body">
              <form onSubmit={handleSearch}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search by topic or category"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <p>
                  Note:- Some news may have been removed which is shown by
                  [Removed].
                </p>
                <button className="btn btn-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
        {searchResults.map((article, index) => (
          <div className="col-md-6 my-2" key={index}>
            <div className="card text-bg-primary" key={index}>
              <div class="card-body" key={index}>
                <h4 class="card-title">{article.title}</h4>
                <p class="card-text">{article.description}</p>
                <a
                  className="badge text-bg-warning"
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
  );
}
