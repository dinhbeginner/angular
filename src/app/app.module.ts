import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//=========lab5================================
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing.module';
//=========== ========    -================================
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//-======================lab2===============================--

//========================lab9============================
import { HomeComponent } from "./lab9/home.component";
import { ProductsService } from './lab9/products.service';
import { ProductDetailsComponent } from './lab9/product_details.component';
import { ProductListComponent } from './lab9/productlist.component';
import { LoginComponent } from './lab9/login.component';
import { RegisterComponent } from './lab9/register.component';
import { AuthService } from './lab9/auth.service'; // Import AuthService
import { MycartComponent } from './lab9/mycart.component';
import { DanhmucComponent } from './lab9/product_danhmuc.component';
import { ProductLoveComponent } from './lab9/sanphamyeutich.component';
import { ProductSaleComponent } from './lab9/khuyenmai.component';
import { PageComponent } from './lab9/page2.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './lab9/admin.component';
@NgModule({

  declarations: [
    AppComponent,

    //=======================lab9===========================================
    HomeComponent,
    ProductDetailsComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    DanhmucComponent,
    ProductLoveComponent,
    ProductSaleComponent,
    PageComponent,
    MycartComponent,
    AdminComponent

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //===========lab5==========
    RouterModule, //
    AppRoutingModule,

    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    ProductsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
