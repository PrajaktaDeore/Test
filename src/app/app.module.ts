import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './product-admin/products/products.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductCreateComponent } from './product-admin/product-create/product-create.component';
import { MenuComponent } from './product-admin/menu/menu.component';
import { NavComponent } from './product-admin/nav/nav.component';
import { ProductModifyComponent } from './product-admin/product-modify/product-modify.component';
// import { ProductAdminModule } from './product-admin/product-admin.module';
// import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAdminComponent,
    ProductCreateComponent,
    ProductModifyComponent,
    MenuComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
