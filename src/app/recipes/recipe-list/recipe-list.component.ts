import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recetas: Recipe[] = [
    new Recipe('Receta de prueba', 'Es una receta', 'https://www.recetasderechupete.com/wp-content/uploads/2014/03/churros-768x527.jpg'),
    new Recipe('Receta de prueba', 'Es una receta', 'https://www.recetasderechupete.com/wp-content/uploads/2014/03/churros-768x527.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
