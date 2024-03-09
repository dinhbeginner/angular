// bai3.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Products } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'ProductListComponent',
  template: `
      <div class="container pt-5 r">
    <h4>Danh Sách Sản Phẩm</h4>    
       
   
        <div class="float-right mt-3">
        <!-- Button trigger modal -->
        <button float-right type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
          Add
        </button></div>
        <div class="row mt-3 ">
          <div class="col-md-6"></div>
        </div>
        <div class="row mt-3 pl-3 pr-3">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Code</th>
                <th>Available</th>
                <th>Price </th>
                <th>5 Star Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of productlist; let i=index" >
                <td scope="row">
                  <img [src]="item.imageUrl" width="50px" alt="" srcset="" />
                </td>
                
                
            
                <td><a [routerLink]="['/product-details', item.id]">{{ item.productName }}</a></td>
                <td>{{ item.productCode }}</td>
                <td>{{ item.releaseDate }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <span
                    *ngFor="let star of [1, 2, 3, 4, 5]"
                    (click)="rateProduct(item.id, star)"
                    [class.rated]="star <= item.starRating"
                  >
                    &#9733;
                  </span>
                </td>
                <td>
                <button class="btn">
                  <span class="badge badge-primary" (click)="IsAdd=0; IsUpdate=2; editProduct(i)" data-toggle="modal" data-target="#modelId">Edit</span>
                </button>
                <button class="btn">
                  <span class="badge badge-danger" (click)="deleteProduct(i)">Delete</span>
                </button>
              </td>
              </tr>
            </tbody>
          </table>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form [formGroup]="formProduct">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="productName">Product Name</label>
                        <input type="text" formControlName="productName" id="productName" class="form-control" placeholder="Enter product name" aria-describedby="helpId">
                         </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="productCode">Product Code</label>
                        <input type="text" formControlName="productCode" id="productCode" class="form-control" placeholder="Enter product code" aria-describedby="helpId">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="releaseDate">Date</label>
                        <input type="date" formControlName="releaseDate" id="releaseDate" class="form-control" placeholder="Select release date" aria-describedby="helpId">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" formControlName="price" id="price" class="form-control" placeholder="Enter price" aria-describedby="helpId">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" formControlName="description" id="description" class="form-control" placeholder="Enter product description" aria-describedby="helpId">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="imageUrl">Picture</label>
                        <input style="border: 0px solid #ced4da;" type="file" formControlName="imageUrl" (change)="onChange($event)" id="imageUrl" class="form-control" placeholder="Choose product image" aria-describedby="helpId">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <img [src]="file" width="20%" alt="Product Image">
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" *ngIf="IsAdd == 1" (click)="addProduct()">Save2</button>
                <button type="button" class="btn btn-primary" *ngIf="IsUpdate == 2" (click)="updateProduct()">Update</button>
                <button type="button" class="btn btn-secondary" (click)="IsAdd==1; IsUpdate==0">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  styles: [
    // Add your custom styles here
    'span { cursor: pointer; }',
    '.rated { color: orange; }',
    '.r{ margin-top:70px; }'
  ],
})
export class ProductListComponent implements OnInit {
  filterText: string = '';
  productlist: Products[] = [];
  formProduct: FormGroup = new FormGroup({});
  file: string = '';
  IsAdd: number = 1;
  IsUpdate: number = 0;
  editIndex: number = -1;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.initializeForm();
  }

  getAllProducts() {
    this.productService.getAllProductList().subscribe((data: Products[]) => {
      this.productlist = data;
    });
  }

  filterResults() {
    if (!this.filterText) {
      this.productService.filterProductList = this.productlist.slice();
    } else {
      this.productService.filterProductList = this.productlist.filter(
        (list) => list.productName.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
  }

  rateProduct(id: number, rating: number) {
    this.productService.rateProduct(id, rating);
    alert('Product ' + rating + ' rating set');
  }

  initializeForm() {
    this.formProduct = new FormGroup({
      id: new FormControl(null),
      productName: new FormControl(''),
      productCode: new FormControl(''),
      releaseDate: new FormControl(''),
      price: new FormControl(0),
      description: new FormControl(''),
      starRating: new FormControl(0),
      imageUrl: new FormControl('')
    });
  }

  onChange(event: any) {
    const file = event.target.files[0].name;
    // Assuming assets folder is in the same directory as your app
    this.file = `./assets/images/` + file;
  }


  addProduct() {
    this.productService.getAutoId().subscribe(newId => {
      this.formProduct.controls['id'].setValue(newId);
      this.productService.AddProduct(this.formProduct.value, this.file).subscribe(() => {
        this.resetForm();
        this.getAllProducts();
      });
    });
  }

  editProduct(index: number) {
    this.editIndex = index + 2; // Tăng index lên 2
    const product = this.productService.getProducts()[index];
    if (product) {
      this.formProduct.patchValue(product);
      this.file = product.imageUrl;
      this.IsAdd = 0;
      this.IsUpdate = 1;
    }
  }

  
  updateProduct() {
    if (this.editIndex !== -1) {
      const updatedProduct = { ...this.formProduct.value, id: this.editIndex }; // Không cần thêm 1 vào editIndex
      const fileImg = this.file; // Lấy fileImg từ biến file trong component
      this.productService.UpdateProduct(updatedProduct, fileImg).subscribe(() => {
        this.resetForm();
        this.getAllProducts();
      });
    }
  }
  
  
  deleteProduct(index: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      const productIdToDelete = index + 2; // Tăng index lên 1 để phù hợp với ID bắt đầu từ 1
      this.productService.DeleteProduct(productIdToDelete).subscribe(() => {
        this.getAllProducts();
      });
    }
  }

  resetForm() {
    this.formProduct.reset();
    this.file = '';
    this.IsAdd = 1;
    this.IsUpdate = 0;
    this.editIndex = -1;
  }
}