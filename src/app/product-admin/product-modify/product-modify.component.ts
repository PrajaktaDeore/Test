import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss'],
})
export class ProductModifyComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    private formbuilder: FormBuilder,
    private productservice: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formbuilder.group({
      description: '',
    });

    this.id = this.route.snapshot.params['id'];

    this.productservice
      .get(this.id)
      .subscribe((product) => this.form.patchValue(product));
  }

  ngOnInit(): void {}

  submit(): void {
    this.productservice
      .update(this.id, this.form.getRawValue())
      .subscribe(() => {
        this.router.navigate(['/product-admin/products']);
      });
  }
}
