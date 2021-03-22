import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";

const App = () => {
  //TODO: secure app_id and app_key
  const APP_ID = "80da0fec";
  const APP_KEY = "aec5be3e0528eb278bb1ef06f8604883";

  const [recipes, setRecipes] = useState([]);

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const { data } = await axios.get(exampleRequest);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
