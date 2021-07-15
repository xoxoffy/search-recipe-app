import React from "react";
import style from "../styles/recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      {/*TODO: round up the calories shown to the user */}
      <p>Calories: {calories}</p>
    </div>
  );
};

export default Recipe;
