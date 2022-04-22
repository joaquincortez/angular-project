import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recetaFueElegida = new EventEmitter<Recipe>();

  recetas: Recipe[] = [
    new Recipe('Receta de prueba', 'Es una receta', 'https://www.recetasderechupete.com/wp-content/uploads/2014/03/churros-768x527.jpg'),
    new Recipe('Otra receta', 'Es otra receta', 'https://edit.org/photos/img/blog/dim-plantillas-recetas-cocina-imprimir-gratis.jpg-840.jpg'),
    new Recipe('Tercera receta', 'Descripcion de la tercera receta', 'https://www.hola.com/imagenes/cocina/recetas/20220318206548/tiramisu-receta-napoli-gang/1-64-859/tiramisu-napoli-m.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecetaElegida(receta: Recipe){
    this.recetaFueElegida.emit(receta);
  }
}
