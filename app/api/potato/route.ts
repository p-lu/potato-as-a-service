import { NextResponse } from "next/server";
import * as fs from "fs";
import { Recipe } from "@/app/types/potato";

export async function GET() {
  const recipes = fs.readFileSync(
    process.cwd() + "/public/recipes.json",
    "utf-8"
  );
  const recipesJSON: Recipe[] = JSON.parse(recipes);
  const randomIndex = Math.floor(Math.random() * recipesJSON.length);
  return NextResponse.json(recipesJSON[randomIndex]);
}
