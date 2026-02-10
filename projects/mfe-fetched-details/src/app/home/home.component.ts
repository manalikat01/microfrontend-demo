// ...existing code...
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import {  Product, ProductsService } from '@shared';

@Component({
  selector: 'app-fetched-details',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnChanges {

    public products: Product[]= [];
    @Input() query: string = '';
  
    constructor(private productsService: ProductsService, ) { }
  
    public ngOnChanges(): void {
      // this.products = this.productsService.getProducts();
      console.log('query', this.query);
      if(this.query) {
      this.products = this.productsService.getProductById(this.query);
      }
      console.log('query', this.products);

    }
  

}
// ...existing code...