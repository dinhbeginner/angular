// cart.service.ts
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Danhmuc } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  protected cartList: Cart[] = [];

  constructor(private prod: ProductsService) {
 
  }
  

  getCallAll() {
    return this.cartList;
  }

  getInstock(id: number) {
    return this.cartList.find((i) => i.Id == id)?.inStock;
  }

  addCart(frmProduct: any) {
    let index = this.cartList.findIndex((i) => i.Id === frmProduct.id);

    if (index === -1) {
      // Product is not in the cart, add it
      let id = this.cartList.push({
        Id: frmProduct.id,
        Name: frmProduct.productName,
        Code: frmProduct.productCode,
        Des: frmProduct.description,
        Price: frmProduct.price,
        ImageUrl: frmProduct.imageUrl,
        inStock: frmProduct.inStock,
        Quantity: 1,
        productId: frmProduct.id,
        productName: frmProduct.productName,
        price: frmProduct.price,
        imageUrl: frmProduct.imageUrl,
      }) - 1;
    } else {
      // Product is already in the cart, update quantity
      this.cartList[index].Quantity += 1;
    }
  }

  totalItem() {
    let sum = 0;
    this.cartList.forEach((item) => {
      sum += item.Quantity!;
    });
    return sum;
  }

  Total() {
    let total = 0;
    this.cartList.forEach((item) => {
      total += item.Price! * item.Quantity!;
    });
    return total;
  }

  RemoveCart(index: number) {
    this.cartList[index].inStock! += 1;
    this.cartList[index].Quantity! -= 1;

    if (this.cartList[index].Quantity == 0) {
      this.cartList.splice(index, 1);
    }
  }

  DeleteAllCart() {
    this.cartList.forEach((item, index) => {
      this.cartList[index].inStock! += item.Quantity!;
    });

    this.cartList = [];
  }
}

interface Cart {
  Id: number;
  Name: string;
  Code: string;
  Des: string;
  Price: number;
  ImageUrl: string;
  inStock: number;
  Quantity: number;
  productId: number;
  productName: string;
  price: number;
  imageUrl: string;
}
