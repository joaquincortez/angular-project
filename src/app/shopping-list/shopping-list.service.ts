import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    cambiaronIngredientes = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Manzana', 50),
        new Ingredient('Banana', 200)
    ];

    agregarIngrediente(ingrediente: Ingredient){
        this.cambiaronIngredientes.emit(this.ingredients.slice());
        this.ingredients.push(ingrediente);
    }

    obtenerIngredientes(){
        return this.ingredients;
    }

}