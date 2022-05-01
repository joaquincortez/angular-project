import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recetaElegida = new EventEmitter<Recipe>();

    private recetas: Recipe[] = [
        new Recipe('Receta de prueba',
            'Es una receta',
            'https://www.recetasderechupete.com/wp-content/uploads/2014/03/churros-768x527.jpg',
            [
                new Ingredient('Ingrediente de prueba 1', 10),
                new Ingredient('Ingrediente de prueba 2', 20)
            ]
        ),
        new Recipe('Otra receta',
            'Es otra receta',
            'https://edit.org/photos/img/blog/dim-plantillas-recetas-cocina-imprimir-gratis.jpg-840.jpg',
            [
                new Ingredient('Ingrediente de prueba 3', 10),
                new Ingredient('Ingrediente de prueba 4', 20),
                new Ingredient('Ingrediente de prueba 5', 20)
            ]
        ),
        new Recipe('Tercera receta',
            'Descripcion de la tercera receta',
            'https://www.hola.com/imagenes/cocina/recetas/20220318206548/tiramisu-receta-napoli-gang/1-64-859/tiramisu-napoli-m.jpg',
            [
                new Ingredient('Ingrediente de prueba 1', 10),
                new Ingredient('Ingrediente de prueba 2', 20),
                new Ingredient('Ingrediente de prueba 3', 20),
                new Ingredient('Ingrediente de prueba 4', 20),
                new Ingredient('Ingrediente de prueba 5', 20)
            ]
        ),

    ];

    constructor(private shoppingListService: ShoppingListService){}

    obtenerRecetas() {
        return this.recetas.slice(); //.slice() para que no se acceda al arreglo desde afuera, sino a una copia
    }

    agregarIngredientesALista(ingredientes: Ingredient[]){
        this.shoppingListService.agregarIngredientesReceta(ingredientes);
    }
}