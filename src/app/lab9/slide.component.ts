// bai3.component.ts
import { Component } from '@angular/core';
import { Products } from './products';

import { ProductsService } from './products.service';

@Component({
  selector: 'HomeComponent',
  template: `
  

 
      <div class="container pt-5 ">
    
     ytyututyutututut
    
      </div>
    `,
  styles: [`
      .bg-find {
        position: fixed;
        margin-left: -150px;
        
        background-color: black;
        /* Đường dẫn đến background ở phía trên */
        background-size: cover;
        background-blend-mode: overlay;
        /* Để hiệu ứng đè lên */
        z-index: 2;
        /* Đảm bảo nằm phía trên */
    }
     
   ` ],
})
export class HomeComponent {
  constructor(private productService: ProductsService) { }
  get filterProductList(): Products[] {
    return this.productService.filterProductList;
  }
  searching: string = '';
  filterResults() {
    if (!this.searching) {
      this.productService.filterProductList = this.productService.products.slice();
    } else {
      this.productService.filterProductList = this.productService.products.filter(
        (list) => list?.productName.toLowerCase().includes(this.searching.toLowerCase())
      );
    }
  }
}
