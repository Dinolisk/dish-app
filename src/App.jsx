import React, { useState, useEffect } from 'react';
import Search from './Search';
import Details from './Details';
import './App.css';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  const [showFavorites, setShowFavorites] = useState(false);
  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites); // toggle the visibility of the favorites list
  };
  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const toggleFavorite = (meal) => {
    const isFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal]);
    }
  };

  const handleReset = () => {
    setSelectedMeal(null);
    setSearchResults([]);
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1 onClick={handleReset} style={{ cursor: 'pointer' }}>Meal Finder App</h1>
        {/* Render the button only if there are items in the favorites array */}
        {favorites.length > 0 && (
          <button onClick={handleToggleFavorites} className="button">
            {showFavorites ? 'Hide Favorite dishes' : 'Show Favorite dishes'}
          </button>
        )}
      </div>
      {/* Conditionally render the favorites list */}
      {showFavorites && favorites.length > 0 && (
        <div className="favorites-container">
          <h2>Your Favorite dishes</h2>
          <ul className="list-group">
            {favorites.map((meal) => (
              <li key={meal.idMeal} className="list-item">
                {meal.strMeal}
                <button onClick={() => toggleFavorite(meal)} className="button-normal">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="search-container">
        <Search
          onMealSelect={handleMealSelect}
          updateSearchResults={setSearchResults}
          searchResults={searchResults}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <div className="details-container">
        {selectedMeal && <Details meal={selectedMeal} toggleFavorite={toggleFavorite} />}
      </div>
    </div>
  );
}

export default App;
