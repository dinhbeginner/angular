// // app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { Bai1Component } from './lab5tonghop/bt1.component';
// import { Bai2Component } from './lab5tonghop/bt2.component';
// // ... import other components as needed
// import { ProductDetailsComponent } from './lab8/product_details.component';
// import { Bai1Component } from './lab8/bt1.component';
// import { LayoutComponent } from './lab8/productlist.component';
import { ProductDetailsComponent } from './lab9/product_details.component';
import { HomeComponent } from './lab9/home.component';
import { ProductListComponent } from './lab9/productlist.component';
import { LoginComponent } from './lab9/login.component';
import { RegisterComponent } from './lab9/register.component';
import { MycartComponent } from './lab9/mycart.component';
import { DanhmucComponent } from './lab9/product_danhmuc.component';
import { ProductLoveComponent } from './lab9/sanphamyeutich.component';
import { ProductSaleComponent } from './lab9/khuyenmai.component';
import { PageComponent } from './lab9/page2.component';
import { AdminComponent } from './lab9/admin.component';
const routes: Routes = [

  //bt5
  // { path: '', component: AppComponent },

  // { path: 'bt1', component: Bai1Component },
  // { path: 'bt2', component: Bai2Component },
  // ... add other routes
  //bt8
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     { path: 'bt1', component: Bai1Component },
  //     { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Detail' },

  //     // Add other routes as needed
  //   ],
  // },  
  //bt9
  { path: '', component: HomeComponent, title: 'Home' },

  { path: 'productlist', component: ProductListComponent, title: 'Product List' },

  { path: 'productdanhmuc', component: DanhmucComponent, title: 'Product Danh Mục' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'sanphamyeuthich', component: ProductLoveComponent, title: 'Love' },
  { path: 'khuyenmai', component: ProductSaleComponent, title: 'khuyến mãi' },
  { path: 'page2', component: PageComponent, title: 'page' },
  { path: 'mycart', component: MycartComponent, title: 'Mycart' },

  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Detail' },
  { path: 'admin', component: AdminComponent, title: 'Admin' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
