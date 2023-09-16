"use client";
import { useEffect, useState } from "react";
import { Recipe } from "../types/potato";
import RecipeCard from "@/components/RecipeCard";
import styled from "@emotion/styled";

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

  const Container = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
    text-align: center;
  `;

  return (
    <Container>
      <h1>Potato as a Service</h1>
      {recipe && <RecipeCard recipe={recipe} />}
    </Container>
  );
}
