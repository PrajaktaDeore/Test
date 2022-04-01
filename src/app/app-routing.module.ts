import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductCreateComponent } from './product-admin/product-create/product-create.component';
import { ProductModifyComponent } from './product-admin/product-modify/product-modify.component';
import { ProductsComponent } from './product-admin/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'product-admin',
    component: ProductAdminComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/create',
        component: ProductCreateComponent,
      },
      {
        path: 'products/:id/modify',
        component: ProductModifyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
