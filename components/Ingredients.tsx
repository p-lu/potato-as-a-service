import { Ingredient } from "@/app/types/potato";
import InfoCard from "./InfoCard";

interface IngredientsProps {
  ingredients: Ingredient[];
}

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <InfoCard title="Ingredients">
      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.ingredient_name}>
              {ingredient.ingredient_name}
            </li>
          );
        })}
      </ul>
    </InfoCard>
  );
};
export default Ingredients;
