import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chickpeas', 5),
    new Ingredient('Potatoes', 10),
    new Ingredient('Mint leaves', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(addingredient: Ingredient) {
    this.ingredients.push(addingredient);
  }

}
