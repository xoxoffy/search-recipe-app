import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";

const App = () => {
  //TODO: secure app_id and app_key
  const APP_ID = "80da0fec";
  const APP_KEY = "aec5be3e0528eb278bb1ef06f8604883";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //fetch recipies only when you click on the search button
  useEffect(() => {
    fetchRecipes();
  }, [query]);

  //fetching data
  const fetchRecipes = async () => {
    const { data } = await axios.get(exampleRequest);
    setRecipes(data.hits);
  };

  //TODO: If the user enters a recipe that wasn't found - display "Recipe not found"

  const updateSearch = (event) => setSearch(event.target.value);

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipies">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
