import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public nombre: string;
    public descripcion: string;
    public pathImagen: string;
    public ingredientes: Ingredient[];

    constructor(nombre: string, descripcion: string, pathImagen: string, ingredientes:Ingredient[]){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.pathImagen=pathImagen;
        this.ingredientes = ingredientes;
    }
}