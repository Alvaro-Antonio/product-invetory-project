import { ProductItem } from "src/product-item/entities/product-item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductBatch {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    dateOrder : Date;

    @Column()
    valueTotal : number;

    @OneToMany(() => ProductItem, productItem => productItem.productBatch)
    productItens : ProductItem [];
}
