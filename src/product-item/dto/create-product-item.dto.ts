import { ProductBatch } from "src/product-batch/entities/product-batch.entity";
import { Product } from "src/products/entities/product.entity";
import { AmountItemProduct } from "src/sale/amount-item-product/entities/amount-item-product.entity";

export class CreateProductItemDto {

    amount: number;

    purchasePrice: number;

    sellingPrice: number;

    product: Product;

    productBatch: ProductBatch;

    amountItemProduct: AmountItemProduct;
    
}
