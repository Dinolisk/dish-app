import React, { useState } from 'react';
import './Search.css';  // Ensure this import is correct

function Search({ onMealSelect, updateSearchResults, searchResults }) {
  const [query, setQuery] = useState('');

  const fetchMeals = async () => {
    if (query !== '') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      updateSearchResults(data.meals);  // Update the search results in App component
    }
  };
  

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a meal"
        className="search-box"  // Apply the styles to the search box
      />
      <button onClick={fetchMeals} className="search-button">Search</button>
      {searchResults && (
        <ul className="search-results">
          {searchResults.map((meal) => (
            <li key={meal.idMeal} onClick={() => onMealSelect(meal)}>
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
