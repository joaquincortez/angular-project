export class Recipe{
    public nombre: string;
    public descripcion: string;
    public pathImagen: string;

    constructor(nombre: string, descripcion: string, pathImagen: string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.pathImagen=pathImagen;
    }
}