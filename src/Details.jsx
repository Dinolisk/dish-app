import React from 'react';

function Details({ meal }) {
    return (
        <div className="details-container">
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="img-thumbnail" />
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
