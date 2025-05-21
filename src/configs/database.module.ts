import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { Balance } from "src/finance/balance/entities/balance.entity";
import { ProductBatch } from "src/product-batch/entities/product-batch.entity";
import { ProductItem } from "src/product-item/entities/product-item.entity";
import { Product } from "src/products/entities/product.entity";


@Module({
    imports : [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'src/configs/database/db.sqlite',
            synchronize: true,
            logging: true,
            entities: [Product,Category,ProductItem,ProductBatch,Balance]
        }),
    ]
})


export class DataBaseModule{}