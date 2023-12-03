import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
  providers:[RecipeService]
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe!: Recipe;
  ngOnInit() {
  }

  constructor(private recipeService:RecipeService) {
  }
onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
}

}
