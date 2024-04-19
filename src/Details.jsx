import React from 'react';

function Details({ meal, toggleFavorite }) {
    const isFavorite = localStorage.getItem('favorites') 
      ? JSON.parse(localStorage.getItem('favorites')).some(fav => fav.idMeal === meal.idMeal) 
      : false;
  
    return (
      <div className="details-container">
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="img-thumbnail" />
        
        {}
        <div>
        <button
            onClick={() => toggleFavorite(meal)}
            className={isFavorite ? 'button-remove-favorites' : 'button-add-favorites'}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
        </div>
        <div>
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <p><strong>Area:</strong> {meal.strArea}</p>
          <p><strong>Instructions:</strong></p>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    );
  }
  
  export default Details;
  
