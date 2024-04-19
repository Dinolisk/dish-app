import React from 'react';
import './Search.css';

function Search({ onMealSelect, updateSearchResults, searchResults, favorites, toggleFavorite }) {
  const [query, setQuery] = React.useState('');

  const fetchMeals = async () => {
    if (query !== '') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      updateSearchResults(data.meals || []); 
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchMeals(); // Trigger search when Enter key is pressed
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a meal"
        className="search-box"
      />
      <button onClick={fetchMeals} className="search-button">Search</button>
      {searchResults && (
        <ul className="search-results">
          {searchResults.map((meal) => (
            <li key={meal.idMeal} onClick={() => onMealSelect(meal)}>
              {meal.strMeal}
              {favorites.some((fav) => fav.idMeal === meal.idMeal) ? (
                <span style={{ marginLeft: '0.5rem', color: 'red' }}>★</span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
