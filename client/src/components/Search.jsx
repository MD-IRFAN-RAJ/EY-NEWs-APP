import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState(""); // For managing the search input
  const [results, setResults] = useState([]); // For storing API results
  const [error, setError] = useState(null); // For handling errors

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }

    const API_KEY = "19f6663fd229401c8265748cf620f186";
    const API_URL = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&apiKey=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch news.");
      }
      const data = await response.json();
      setResults(data.articles); // Assuming 'articles' contains the results
      setError(null);
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  };

  return (
    <div className="search-container">
      <form
        className="search-bar my-8 text-center px-2 xs:mb-10 md:mb-16"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          name="search"
          className="search-box md:w-2/4 sm:p-4 xs:px-2"
          placeholder="Search News"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="results mt-8">
        {results.length > 0 ? (
          <ul className="list-disc">
            {results.map((article, index) => (
              <li key={index} className="mb-4">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold">{article.title}</h3>
                  <p className="text-sm">{article.description}</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          !error 
        )}
      </div>
    </div>
  );
}

export default Search;
