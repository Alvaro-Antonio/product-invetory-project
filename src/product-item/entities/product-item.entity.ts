import { IsNotEmpty } from "class-validator";
import { ProductBatch } from "src/product-batch/entities/product-batch.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductItem {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    @IsNotEmpty()
    amount : number;

    @Column()
    purchasePrice : number;

    @Column()
    sellingPrice : number;


    @IsNotEmpty()
    @ManyToOne(() => Product, product => product.productItems, { eager: true })
    product : Product;
    productBatch: ProductBatch;


}
