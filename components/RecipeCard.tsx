/** @jsxImportSource @emotion/react */
import { Recipe } from "@/app/types/potato";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PotatoSVG from "./PotatoSVG";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const Card = styled.div`
    border-radius: 1rem;
    background-color: lightblue;
    padding: 50px;
    max-width: 1000px;
    margin: 10px auto;
    width: 90%;
    min-width: 300px;
  `;

  return (
    <Card>
      <h2>{recipe.recipe_name}</h2>
      <PotatoSVG />
      <div
        css={css`
          display: flex;
          justify-content: center;
          @media (max-width: 500px) {
            flex-wrap: wrap;
          }
        `}
      >
        <Ingredients ingredients={recipe.ingredients} />
        <Instructions instructions={recipe.instructions} />
      </div>
    </Card>
  );
};

export default RecipeCard;
