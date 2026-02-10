// ...existing code...
import { Component, EventEmitter, Output } from '@angular/core';
import {  Product, ProductsService } from '@shared';

@Component({
  selector: 'app-list',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // ngModel-bound string (was conflicting with EventEmitter)

    public products: Product[] = [];
  
    constructor(private productsService: ProductsService, ) { }
  
    public ngOnInit(): void {
      this.products = this.productsService.getProducts();
    }
  
  
}
// ...existing code...