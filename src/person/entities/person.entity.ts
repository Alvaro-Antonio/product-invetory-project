import { IsNotEmpty } from "class-validator";
import { Customer } from "src/customer/entities/customer.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    name: string;

    @Column({ nullable: true })
    @IsNotEmpty()
    phone: string;

    @Column({ nullable: true })
    @IsNotEmpty()
    email: string;

    @Column({ nullable: true })
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    @Column({default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

    @OneToOne(() => Customer, customer => customer.person)
    customer: Customer
}
