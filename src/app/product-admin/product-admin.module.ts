import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminComponent } from './product-admin.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductAdminComponent,
    MenuComponent,
    NavComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductModifyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductAdminModule { }
