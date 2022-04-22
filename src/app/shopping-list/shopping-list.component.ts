import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Manzana',50),
    new Ingredient('Banana',200)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredienteAgregado(ingrediente: Ingredient){
    this.ingredients.push(ingrediente);
  }

}
