// bai3.component.ts
import { Component } from '@angular/core';
import { Products } from './products';

import { ProductsService } from './products.service';

@Component({
    selector: 'PageComponent',
    template: `
  <div style="margin-left:800px; " >
      <form class="form-inline my-2 my-lg-0 bg-find">
  <input
    type="text"
    size="50"
    [(ngModel)]="searching"
    (ngModelChange)="filterResults()"
    name="searching"
    id=""
    class="input form-control"
    placeholder="Tìm sản phẩm"
    mall
  />
</form>
  </div>

  // slide
  <div class="container-fluid maunen">
    <div class="container">
      <div class="row">

        <div class="col-lg-8 col-sm-12">
          <div style="padding:50px 0px 30px 0px;">
            <div id="carouselId" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner " role="listbox">
                <div class="carousel-item active">
                  <img src="../assets/images/images-slide.jpg" width="100%" height="300px" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/img-slide.jpg" width="100%" height="300px" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img src="../assets/images/images3.jpg" width="100%" height="300px" alt="Third slide">
                </div>


              </div>
              <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
        </div>
        <div class="col-lg-4 col-sm-12 pt-5">
          <div class="row pt-1">
            <div class="col-lg-5">
              <img src="../assets/images/images34535.jpg" height="150px" width="350px">
            </div>

          </div>
          <div class="row pt-1">
            <div class="col-lg-5">
              <img src="../assets/images/images111111.jpg" height="145px" width="350px">
            </div>

          </div>
        </div>
      </div>

    </div>



  </div>
<!--endslide--->
   



<!--danhmuc-->
<div class="container pt-3">
<h5 class="pl-3 chunghethuat">DANH MỤC</h5>
<div class="container  maunen  pt-3">
  <div>


    <div class="row khung1 pt-2">
      <div class="col-md-2 ">
      <a [routerLink]="['/productdanhmuc']">
      <img class="rounded-circle" src="../assets/images/MUA3.jpg" width="50%">
    </a>
    

        <h6 style="font-size: 12px; padding: 10px 0px 0px 0px;">Thời Trang Nam</h6>
      </div>

      <div class="col-md-2 ">
        <a href=""> <img class="rounded-circle" src="../assets/images/danhmuc2.jpg" width="50%"></a>
        <p></p>
        <h6 style="font-size: 12px; padding: 0px 0px 0px 0px;">Mắt Kính Thời Trang</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/danhmuc1.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 15px 0px 0px 0px;">Giầy Dép Nam</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/images10.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 10px 0px 0px 10px;">Đồng Hồ</h6>
      </div>

      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/danhmuc6.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 10px 0px 0px 25px;">BaLo</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/danhmuc7.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 10px 0px 0px 15px;">Nước Hoa</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/imageskm3.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 15px 0px 0px 0px;">Thời Trang Nữ</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/images8.jpg" width="50%"></a>

        <h6 style="font-size: 12px; padding: 15px 0px 0px 15px;">Trang Sức</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/images33.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 15px 0px 0px 5px;">Giầy Guốc Nữ</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/images11.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 15px 0px 0px 5px;">Túi Sách Nữ</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/danhmuc4.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 25px 0px 0px 20px;">Máy Ảnh</h6>
      </div>
      <div class="col-md-2 pt-2">
        <a href=""> <img class="rounded-circle" src="../assets/images/danhmuc8.jpg" width="50%"></a>
        <h6 style="font-size: 12px; padding: 20px 0px 20px 15px;">Son Môi</h6>
      </div>



    </div>
  </div>
</div>

</div>
<!--enddanhmuc---->
 <!----filer---->
 <div class="container ">
 <div class="row maunen1">


     <ul class="nav nav-tabs ">
         <p style="padding:10px 10px 0px 10px;">Sắp xếp theo</p>
         <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true" aria-expanded="false">Tất Cả Sản Phẩm</a>
             <div class="dropdown-menu">

                 <!-- b4-collasp-accodition -->
                 <div id="accordianId" role="tablist" aria-multiselectable="true">
                     <div class="card">
                         <div class="card-header" role="tab" id="section1HeaderId">
                             <h5 class="mb-0">
                                 <a data-toggle="collapse" data-parent="#accordianId"
                                     href="#section1ContentId" aria-expanded="true"
                                     aria-controls="section1ContentId">
                                     <span>Áo Khoát</span>
                                 </a>
                             </h5>
                         </div>
                         <div id="section1ContentId" class="collapse in" role="tabpanel"
                             aria-labelledby="section1HeaderId">
                             <div class="card-body ">
                                 <p>
                                     <a href="" style="color:black">Áo Khoát Jean</a><br>
                                     <a href="" style="color:black">Áo Khoát Vải Dù</a><br>
                                     <a href="" style="color:black">Áo Khoát Vải Chóng Mưa</a>
                                 </p>

                             </div>
                         </div>
                     </div>
                     <div class="card">
                         <div class="card-header" role="tab" id="section2HeaderId">
                             <h5 class="mb-0">
                                 <a data-toggle="collapse" data-parent="#accordianId"
                                     href="#section2ContentId" aria-expanded="true"
                                     aria-controls="section2ContentId">
                                     Quần
                                 </a>
                             </h5>
                         </div>
                         <div id="section2ContentId" class="collapse in" role="tabpanel"
                             aria-labelledby="section2HeaderId">
                             <div class="card-body">
                                 <p>
                                     <a href="" style="color:black">Quần Jean</a><br>

                                     <a href="" style="color:black">Quần Bò</a><br>
                                     <a href="" style="color:black">Quần Tây</a><br>
                                     <a href="" style="color:black">Quần Ngắn</a><br>
                                     <a href="" style="color:black">Quần Thể Thao</a>


                                 </p>
                             </div>
                         </div>
                     </div>
                     <div class="card">
                         <div class="card-header" role="tab" id="section3HeaderId">
                             <h5 class="mb-0">
                                 <a data-toggle="collapse" data-parent="#accordianId"
                                     href="#section3ContentId" aria-expanded="true"
                                     aria-controls="section3ContentId">
                                     Áo
                                 </a>
                             </h5>
                         </div>
                         <div id="section3ContentId" class="collapse in" role="tabpanel"
                             aria-labelledby="section3HeaderId">
                             <div class="card-body">
                                 <p>
                                     <a href="" style="color:black">Áo Sơ Mi</a><br>
                                     <a href="" style="color:black">Áo Lean</a><br>
                                     <a href="" style="color:black">Áo Tay Ngắn</a><br>
                                     <a href="" style="color:black">Áo Thể Thao</a><br>
                                     <a href="" style="color:black">Áo Nữ</a>


                                 </p>
                             </div>
                         </div>
                     </div>
                     <div class="card">
                         <div class="card-header" role="tab" id="section3HeaderId">
                             <h5 class="mb-0">
                                 <a data-toggle="collapse" data-parent="#accordianId"
                                     href="#section3ContentId" aria-expanded="true"
                                     aria-controls="section3ContentId">
                                     Giầy
                                 </a>
                             </h5>
                         </div>
                         <div id="section3ContentId" class="collapse in" role="tabpanel"
                             aria-labelledby="section3HeaderId">
                             <div class="card-body">

                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </li>
         <li class="nav-item ">
             <a href="#noibat" [routerLink]="['']"  class="nav-link active" data-toggle="tab">Nổi Bật</a>
         </li>

         <li class="nav-item">
             <a href="#" [routerLink]="['/sanphamyeuthich']"  class="nav-link" data-toggle="tab">Sản phẩm được yêu thích</a>
         </li>
         <li class="nav-item">
             <a href="#khuyenmai"  [routerLink]="['/khuyenmai']" class="nav-link " data-toggle="tab">Khuyến Mãi</a>
         </li>
         <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true" aria-expanded="false">Lựa chọn giá</a>
             <div class="dropdown-menu">
                 <a class="dropdown-item" href="#">Trên 100.000</a>

                 <div class="dropdown-divider"></div>
                 <a class="dropdown-item" href="#">Dưới 100.000</a>
             </div>
         </li>
     </ul>
 </div>
</div>
<!----endfilter---->

<!--sanpham-->



      <div class="container pt-5 ">
    
      <div class="row">
      <ng-container *ngFor="let item of filterProductList.slice(12.22)">
      
     
        <div class="col-lg-3 col-md-3 col-sm-4 col-6">
          <div class="card-deck mt-3">
            <div class="card">
              <img class="card-img-top p-3" src="{{item.imageUrl}}" width="100%" height="50%" alt="">
              <div class="card-body text-center">
                <h4 class="card-title"><a [routerLink]="['/product-details', item.id]">{{ item.productName }}</a></h4>
                <p class="card-text">{{item.price}}$</p>
                <button type="button" class="btn btn-primary" [routerLink]="['/product-details', item.id]">See</button>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
    <!--endsanpham-->

    <div class="row pt-4">
        <div class="col-md-4"></div>
        <div class="col-md-4 pl-5  ml-5 ">
            <ul class="pagination pl-5 ml-5">
                <li class="page-item myButton"><a class="page-link" href="#" [routerLink]="['']"><span class="fa fa-arrow-left"></span></a>
                </li>
                <li class="page-item myButton text-dark"><a class="page-link " href="#"[routerLink]="['']">1</a></li>
                <li class="page-item myButton"><a class="page-link" href="#"[routerLink]="['/page2']">2</a></li>
                <li class="page-item myButton"><a class="page-link" href="#" [routerLink]="['/page2']"><span class="fa fa-arrow-right"></span></a>
                </li>
                
               
            </ul>
        </div>
        <div class="col-md-4"></div>

    </div>

    
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
export class PageComponent {
    constructor(private productService: ProductsService) { }
    get filterProductList(): Products[] {
        return this.productService.filterProductList;
    }
    searching: string = '';
    filterResults() {
      if (!this.searching) {
        this.productService.getAllProductList().subscribe(
          (products: Products[]) => {
            this.productService.filterProductList = products;
          },
          (error) => {
            console.error('Error fetching products:', error);
            // Handle error
          }
        );
      } else {
        this.productService.getAllProductList().subscribe(
          (products: Products[]) => {
            this.productService.filterProductList = products.filter(
              (product) => product.productName.toLowerCase().includes(this.searching.toLowerCase())
            );
          },
          (error) => {
            console.error('Error fetching products:', error);
            // Handle error
          }
        );
      }
    }
    
}
