// ...existing code...
import { Component, EventEmitter, Output } from '@angular/core';
import { BasketService, Product, ProductsService } from '@shared';

@Component({
  selector: 'app-list',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // ngModel-bound string (was conflicting with EventEmitter)

    public products: Product[] = [];
  
    constructor(private productsService: ProductsService, private basketService: BasketService) { }
  
    public ngOnInit(): void {
      this.products = this.productsService.getProducts();
    }
  
    public addToBasket(productId: number): void {
      const product = this.products.find(p => p.id === productId) as Product;
      this.basketService.addToBasket(product);
    }
  
}
// ...existing code...