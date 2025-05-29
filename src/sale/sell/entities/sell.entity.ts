import { IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/entities/customer.entity";
import { ItemSale } from "src/sale/item-sale/entities/item-sale.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sell {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    date: Date;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    paymentMethod: string;

    @IsNotEmpty()
    @ManyToOne(() => Customer, { eager: true })
    @JoinColumn({ name: 'customerId' })
    customer: Customer; // Assuming customer is a separate entity

    //userId: number; // Assuming user is a separate entity

    @IsNotEmpty()
    @OneToMany(() => ItemSale, itemSale => itemSale.sell)
    items: ItemSale[]; // This should be replaced with the actual type of items sold, e.g., ItemSale[]
}
