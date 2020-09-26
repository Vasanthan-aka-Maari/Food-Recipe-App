import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, image, calories, dietLabels, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p><b>Calories:</b> {calories}</p>
      <p><b>Diet Label:</b> {dietLabels.length ? dietLabels: "Not Labeled"}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default Recipe;
