import { IsNotEmpty } from "class-validator";
import { ProductItem } from "src/product-item/entities/product-item.entity";
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class AmountItemProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    amountInitial: number;

    @IsNotEmpty()
    @Column()
    amountFinal: number;

    @IsNotEmpty()
    @OneToOne(() => ProductItem, productItem => productItem.amountItemProduct)
    productItem: ProductItem;
}
