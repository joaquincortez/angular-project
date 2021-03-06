import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() receta: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAnadirListaCompras(){
    this.recipeService.agregarIngredientesALista(this.receta.ingredientes);
  }
}
