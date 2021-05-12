import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Napolitana',
      'The unique and authetique recipe of south Italy.',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Flavour', 2),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Olive Oil', 2),
        new Ingredient('Tomatoes', 2),
      ]
    ),

    new Recipe(
      'South Kentucky Burger',
      'The smoked delicious Burger from the central America.',
      'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Beef Meat', 2),
        new Ingredient('Onions', 2),
        new Ingredient('Tomatoes', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addFromServiceIngredients(ingredients);
  }
}