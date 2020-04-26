import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pani Puri',
      'Panipuri or Phuchka is a snack which consists of a round hollow puri, filled with a mixture of flavored water, tamarind chutney, chili, chaat masala, potato, onion or chickpeas.',
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Crispy_Pani_Puri.jpg'),
    new Recipe('Dhokla',
      'Dhokla is made with a fermented batter derived from rice and split chickpeas. Dhokla can be eaten for breakfast, as a main course, as a side dish, or as a snack.',
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Marro_Dhokla.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
