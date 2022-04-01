import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.all().subscribe((products) => {
      this.products = products;
    });
  }
  productDel(id: number): void {
    this.productservice.delete(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }
}
