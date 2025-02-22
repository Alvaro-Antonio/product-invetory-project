import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/category/entities/category.entity";
import { Product } from "src/products/entities/product.entity";


@Module({
    imports : [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'src/configs/database/db.sqlite',
            synchronize: true,
            logging: true,
            entities: [Product,Category]
        }),
        //TypeOrmModule.forFeature([Product,Category])
    ]
})


export class DataBaseModule{}