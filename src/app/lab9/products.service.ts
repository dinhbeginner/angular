// service.ts

import { Injectable } from '@angular/core';
import { Danhmuc, Products, Slide } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {
    this.filterProductList = this.products;
    this.filterDanhmuc = this.danhmuc;
    this.getAllProductList().subscribe(res => {
      this.filterProductList = res
    })
  };

  // Constructor logic 
  slide: Slide[] = [
    { "slideId": 1, "image": "../assets/images/images-slide.jpg" },
    { "slideId": 2, "image": "../assets/images/img-slide.jpg" },
  ];
  filterDanhmuc: Danhmuc[] = [];

  private baseURL = `http://localhost:3000/products`
  danhmuc: Danhmuc[] = [
    {
      "id": 1, "productName": "Giay Nam", "productCode": "GDN-0011", "releaseDate": "March 19, 2016", "description": "Leaf rake with 48-inch wooden handle.", "price": 19.95, "starRating": 0, "imageUrl": "../assets/images/danhmuc1.jpg", "inStock": 5
    }

    ,
    {
      "id": 2, "productName": "Ao Khoat", "productCode": "GDN-0023", "releaseDate": "March 18, 2016", "description": "15 gallon capacity rolling garden cart", "price": 32.99, "starRating": 0, "imageUrl": "../assets/images/images4.jpg", "inStock": 5
    }

    ,

    {
      "id": 3, "productName": "Bộ đồ nam", "productCode": "GDN-0023", "releaseDate": "March 18, 2016", "description": "15 gallon capacity rolling garden cart", "price": 32.99, "starRating": 0, "imageUrl": "../assets/images/images5.jpg", "inStock": 5
    }

    ,

    {
      "id": 4, "productName": "Áo thun", "productCode": "GDN-0023", "releaseDate": "March 18, 2016", "description": "15 gallon capacity rolling garden cart", "price": 32.99, "starRating": 0, "imageUrl": "../assets/images/images6.jpg", "inStock": 5
    }

    ,

    {
      "id": 5, "productName": "Áo tay dai", "productCode": "GDN-0023", "releaseDate": "March 18, 2016", "description": "15 gallon capacity rolling garden cart", "price": 32.99, "starRating": 0, "imageUrl": "../assets/images/images7.jpg", "inStock": 5
    }

    ,
  ];

  filterProductList: Products[] = [];
  products: Products[] = []
  getProducts(): Products[] {
    return this.products;
  }

  rateProduct(productId: number, rating: number): void {
    const product = this.products.find((product) => product.id === productId);
    if (product) {
      product.starRating = rating;
    }
  }

  getProductId(id: number): Observable<Products> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Products>(url);
  }
  


  getAllProductList(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseURL}`)
  }

  getAutoId(): Observable<number> {
    return this.http.get<Products[]>(this.baseURL).pipe(
      map(products => {
        let maxId = 0;
        products.forEach(product => {
          const productId = parseInt(product.id.toString());
          if (productId > maxId) {
            maxId = productId;
          }
        });
        return maxId + 1;
      })
    );
  }
  AddProduct(newProduct: Products, fileImg: string): Observable<Products> {
    fileImg = '.' + fileImg;
    const productWithImg = { ...newProduct, imageUrl: fileImg }; // Combine newProduct with imageUrl
    return this.http.post<Products>(this.baseURL, productWithImg);
  }

  UpdateProduct(updatedProduct: Products, fileImg: string): Observable<Products> {
    const updatedProductWithImg = { ...updatedProduct, imageUrl: fileImg }; // Kết hợp updatedProduct với imageUrl mới
    const url = `${this.baseURL}/${updatedProduct.id}`;
    return this.http.put<Products>(url, updatedProductWithImg);
  }

  DeleteProduct(id: number): Observable<any> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete(url);
  }


  // Methods and properties of the service go here
}
