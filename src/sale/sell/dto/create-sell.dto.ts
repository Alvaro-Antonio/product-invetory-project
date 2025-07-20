import { IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/entities/customer.entity";
import { ItemSale } from "src/sale/item-sale/entities/item-sale.entity";
import { PaymentMethod } from "../sell.payment.enum";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateSellDto {
    
    @ApiProperty({ example: '2025-07-01T00:00:00.000Z', description: 'Data da venda' }) 
    @IsNotEmpty()
    date: Date;

    @ApiProperty({ example: 150.75, description: 'Total da venda' }) 
    @IsNotEmpty()
    total: number;

    @ApiProperty({ example: 'CREDIT_CARD', description: 'Método de pagamento' }) 
    @IsNotEmpty()
    paymentMethod: PaymentMethod;

    @ApiProperty({ 
        example: { 
            id: 1, 
            person: { 
                id: 1, 
                name: 'John Doe', 
                phone: '123456789', 
                email: 'john.doe@example.com', 
                address: '123 Main St', 
                createdAt: '2025-07-01T00:00:00.000Z', 
                updatedAt: null 
            }, 
            vip: true 
        }, 
        description: 'Cliente associado à venda' 
    }) 
    @IsNotEmpty()
    customer: Customer;

    @ApiProperty({ 
        example: [
            { 
                id: 1, 
                productItem: { 
                    id: 1, 
                    amount: 10, 
                    purchasePrice: 50.0, 
                    sellingPrice: 75.0, 
                    product: { 
                        id: 1, 
                        name: 'Produto A', 
                        description: 'Descrição do Produto A', 
                        image: 'produto-a.jpg' 
                    } 
                }, 
                quantity: 2, 
                unitPrice: 75.0, 
                totalPrice: 150.0, 
                discount: 0 
            }
        ], 
        description: 'Itens da venda' 
    }) 
    @IsNotEmpty()
    items: ItemSale[];
}
