import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
    new Ingredient('Cherries',8),
  ];

  onIngredientadded(ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }

}
