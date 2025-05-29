import { IsNotEmpty } from "class-validator";
import { ProductItem } from "src/product-item/entities/product-item.entity";
import { Sell } from "src/sale/sell/entities/sell.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";

@Entity()
export class ItemSale {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @OneToOne(() => ProductItem)
    @JoinColumn()
    productItem: ProductItem; // Assuming productItem is a separate entity

    @IsNotEmpty()
    @Column()
    quantity: number;

    @IsNotEmpty()
    @Column()
    unitPrice: number;

    @IsNotEmpty()
    @Column()
    totalPrice: number;

    @Column({nullable: true})
    discount: number;

    @ManyToOne(() => Sell, sell => sell.items)
    sell: Sell;
}
