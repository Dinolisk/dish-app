import React, { useState } from 'react';
import Search from './Search';
import Details from './Details';
import './App.css';  // Ensure this import is correct

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  const handleReset = () => {
    setSelectedMeal(null);
    setSearchResults([]);  // Clears the search results
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1 onClick={handleReset} style={{ cursor: 'pointer', color: 'black' }}>Meal Finder App</h1>
      </div>
      <div className="search-container">
      <Search onMealSelect={handleMealSelect} updateSearchResults={setSearchResults} searchResults={searchResults} />
      </div>
      <div className="details-container">
        {selectedMeal && <Details meal={selectedMeal} />}
      </div>
    </div>
  );
}

export default App;
