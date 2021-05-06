import { Recipe } from './../../recipes.model';
import { Component, Input,  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent  {

  @Input() recipe: Recipe
  @Output() recipeSelected = new EventEmitter<void>();
  
  constructor() { }

  onSelected() {
      this.recipeSelected.emit();
  }

}
