import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from './products';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';

@Component({
  selector: 'MycartComponent',
  template: `
  <div class="container pt-5">
  <div class="row">
    <table style="width: 100%;" class="text-center table">
      <tr>
        <th>HÌNH</th>
        <th>SẢN PHẨM</th>
        <th>ĐƠN GIÁ</th>
        <th>SỐ LƯỢNG</th>
        <th>THÀNH TIỀN</th>
        <th></th>
      </tr>
      <!-- Loop to display cart items -->
      <tr *ngFor="let item of cart; let i = index">
        <td>
          <img [src]="item.imageUrl" style="height: 100px; width: 100px;">
        </td>
        <td class="align-middle">{{ item.productName }}</td>
        <td class="align-middle">{{ item.price }}</td>
        <td class="align-middle">{{ item.Quantity }}</td>
        <td class="align-middle">{{ item.price * item.Quantity }}</td>
        <td class="align-middle">
          <button class="btn-danger" (click)="Remove(i)">Remove</button>
        </td>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th>Tổng tiền</th>
        <th>{{ totalItems() }}</th>
        <th>{{ Total()  }}</th>
        <th>
          <button class="btn btn-danger" (click)="DeleteAll()">Xóa hết</button>
        </th>
      </tr>
    </table>
  </div>
</div>
      
   
  `,
  styles: [
    'span { cursor: pointer; }',
    '.rated { color: orange; }',
    '.crop{overflow: hidden;}'
  ],
})

export class MycartComponent implements OnInit {
  productDetail: Products | undefined;
  starRating: number = 0;
  selectedVariant: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['id']);
    this.productService.getProductId(id).subscribe(
      (product: Products) => {
        this.productDetail = product;
      },
      (error) => {
        console.error('Error fetching product details:', error);
        // Handle error
      }
    );
  }

  rateProduct(productId: number, rating: number) {
    this.starRating = rating;
    this.productService.rateProduct(productId, rating);
    alert('Product ' + rating + ' rating');
  }

  totalItems() {
    return this.cartService.totalItem();
  }

  Total() {
    return this.cartService.Total();
  }

  get cart() {
    return this.cartService.getCallAll();
  }


  Remove(index: number) {
    this.cartService.RemoveCart(index);
  }

  DeleteAll() {
    this.cartService.DeleteAllCart();
  }

  addCart() {
    this.cartService.addCart(this.productDetail);
  }

  inStock(): boolean {
    return (this.productDetail?.inStock || 0) > 0;
  }



  // ... Other methods and event handlers ...
}
