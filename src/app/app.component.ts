import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HeaderComponent} from "./header/header.component";
import {DropdownDirective} from "./shared/dropdown.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RecipeListComponent, RecipesComponent, ShoppingListComponent, HeaderComponent, DropdownDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app';
  loadedFeature='recipe'
  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
