import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputNombre', {static: false}) inputNombreRef: ElementRef;
  @ViewChild('inputCantidad', {static: false}) inputCantidadRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAgregarItem(){
    const nuevoIngrediente: Ingredient = new Ingredient(this.inputNombreRef.nativeElement.value, this.inputCantidadRef.nativeElement.value);
    this.shoppingListService.agregarIngrediente(nuevoIngrediente);
  }

}
