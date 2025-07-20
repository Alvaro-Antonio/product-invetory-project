import { CreateProductItemDto } from "src/product-item/dto/create-product-item.dto";
import { ProductItem } from "src/product-item/entities/product-item.entity";

export class CreateAmountItemProductDto {
    amountInitial: number;
    
    amountFinal: number;
    
    productItem: CreateProductItemDto;
}
