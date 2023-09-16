"use client";
import { useEffect, useState } from "react";
import { Recipe } from "../types/potato";

export default function Potato(): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe | undefined>();

  useEffect(() => {
    getRecipe().then((res) => setRecipe(res));
  }, []);

  const getRecipe = async () => {
    const data = await fetch("/api/potato", {
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    return data.json();
  };

  return (
    <>
      <h1>Potato as a Service</h1>
      <h2>{recipe?.recipe_name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe?.ingredients.map((ingredient) => {
          return (
            <li key={ingredient.ingredient_name}>
              {ingredient.ingredient_name}
            </li>
          );
        })}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe?.instructions.map((instruction) => {
          return <li key={instruction}>{instruction}</li>;
        })}
      </ol>
    </>
  );
}
