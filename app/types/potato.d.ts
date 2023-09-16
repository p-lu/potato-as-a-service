export type Recipe = {
  recipe_name: string;
  ingredients: Ingredient[];
  instructions: string[];
};

export type Ingredient = {
  ingredient_name: string;
  quantity: number;
  unit: string;
  preparation: string;
};
