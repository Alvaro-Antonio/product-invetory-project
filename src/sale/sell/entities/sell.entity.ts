import { IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/entities/customer.entity";
import { ItemSale } from "src/sale/item-sale/entities/item-sale.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PaymentMethod } from "../sell.payment.enum";

@Entity()
export class Sell {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    date: Date;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    total: number;

    @IsNotEmpty()
    @Column({
      type: 'enum',
      enum: PaymentMethod,
      default: PaymentMethod.CASH,
    })
    @JoinColumn({ name: 'paymentMethod' })
    paymentMethod: PaymentMethod;

    @IsNotEmpty()
    @ManyToOne(() => Customer, { eager: true })
    @JoinColumn({ name: 'customerId' })
    customer: Customer; 

    //userId: number; // Assuming user is a separate entity

    @IsNotEmpty()
    @OneToMany(() => ItemSale, itemSale => itemSale.sell)
    items: ItemSale[]; 
}
