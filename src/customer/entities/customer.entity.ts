import { IsNotEmpty } from "class-validator";
import { Person } from "src/person/entities/person.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @JoinColumn()
    @OneToOne(() => Person, person => person.customer)
    person: Person; // Assuming person is a separate entity

    @IsNotEmpty()
    @Column({nullable: false, default: false})
    vip: boolean;
}
