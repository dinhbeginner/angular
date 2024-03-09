import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from './products';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';

@Component({
  selector: 'product-details',
  template: `
    <div class="container pt-5 ">
      <div class="row pt-5">
    
        <div class="col-md-4 p-4 text-center">
          <img [src]="productDetail?.imageUrl" width="50%" alt="Product Image">
        </div>
        <div class="col-md-4 pt-4">
          <h1>{{ productDetail?.productName }}</h1>
          <div>
            <span
              *ngFor="let star of [1, 2, 3, 4, 5]"
              (click)="rateProduct(productDetail?.id!, star)"
              [class.rated]="star <= starRating"
            >
              &#9733;
            </span>
          </div>
          <div class="text-justify">
            <h3>Code: {{ productDetail?.productCode }}</h3>
          </div>
          <h3>Date: {{ productDetail?.releaseDate }}</h3>
          <h3>Price: {{ productDetail?.price }}</h3>
          <h5>Description: {{ productDetail?.description }}</h5>
          <p>InStock:{{ productDetail?.inStock }}</p>
          <div class="row">
          <button class="btn btn-primary" routerLink="/">Back</button> <p class="p-3"></p>
          <button class="btn btn-primary mr-5" (click)="addCart()">Mua</button><br></div>
        </div>
        <div class="col-md-4">
          <div style="border: 1px solid black; margin-top: 10px; padding: 10px;">
            <a href="#" style="float: left;">
              <i class="fa fa-shopping-cart" style="font-size: 50px;"></i>
            </a>
            <div class="text-center">
              {{ totalItems() }}<br>Tổng tiền : {{ Total() | currency }} <br>
              <button class="btn btn-primary" style="margin-top: 10px;" data-toggle="modal" data-target="#modelId">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
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
                <td class="align-middle">{{ item.price | currency }}</td>
                <td class="align-middle">{{ item.Quantity }}</td>
                <td class="align-middle">{{ item.price * item.Quantity | currency }}</td>
                <td class="align-middle">
                  <button class="btn-danger" (click)="Remove(i)">Remove</button>
                </td>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>Tổng tiền</th>
                <th>{{ totalItems() }}</th>
                <th>{{ Total() | currency }}</th>
                <th>
                  <button class="btn btn-danger" (click)="DeleteAll()">Xóa hết</button>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    'span { cursor: pointer; }',
    '.rated { color: orange; }',
    '.crop{overflow: hidden;}'
  ],
})

export class ProductDetailsComponent implements OnInit {
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
