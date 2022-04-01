import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  description = '';
  constructor(private productservice: ProductService, private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    const data = {
      description: this.description,
    };
    this.productservice.create(data).subscribe(() => {
      this.router.navigate(['/product-admin/products']);
    });
  }
}
