import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    cambiaronIngredientes = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [];

    agregarIngrediente(ingrediente: Ingredient){
        this.cambiaronIngredientes.emit(this.ingredients.slice());
        this.ingredients.push(ingrediente);
    }

    obtenerIngredientes(){
        return this.ingredients;
    }

    agregarIngredientesReceta(ingredientes: Ingredient[]){
        this.ingredients.push(...ingredientes);
        this.cambiaronIngredientes.emit(this.ingredients.slice());
    }

}