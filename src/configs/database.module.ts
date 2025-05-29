import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { Balance } from "src/finance/balance/entities/balance.entity";
import { Person } from "src/person/entities/person.entity";
import { ProductBatch } from "src/product-batch/entities/product-batch.entity";
import { ProductItem } from "src/product-item/entities/product-item.entity";
import { Product } from "src/products/entities/product.entity";
import { AmountItemProduct } from "src/sale/amount-item-product/entities/amount-item-product.entity";
import { ItemSale } from "src/sale/item-sale/entities/item-sale.entity";
import { Sell } from "src/sale/sell/entities/sell.entity";


@Module({
    imports : [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'src/configs/database/db.sqlite',
            synchronize: true,
            logging: true,
            entities: [
                Product,
                Category,
                ProductItem,
                AmountItemProduct,
                ProductBatch,
                Balance,
                Person,
                Customer,
                Sell,
                ItemSale,       
            
            ]
        }),
    ]
})


export class DataBaseModule{}