import { CreateProductItemDto } from "src/product-item/dto/create-product-item.dto";

export class CreateProductBatchDto {
    
    dateOrder: Date;

    valueTotal: number;

    productItens : CreateProductItemDto[] = [];
}
