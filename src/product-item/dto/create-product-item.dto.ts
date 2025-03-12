import { Product } from "src/products/entities/product.entity";

export class CreateProductItemDto {

    amount: number;

    purchasePrice: number;

    sellingPrice: number;

    product: Product;
    
}
