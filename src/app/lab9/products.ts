// products.service.ts
export interface Products {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  sale: number;
  starRating: number;
  imageUrl: string;
  inStock: number; // Add this property
}
export interface Slide {
  slideId:number;
  image: string;
}
export interface Danhmuc {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  inStock: number; // Add this property
}