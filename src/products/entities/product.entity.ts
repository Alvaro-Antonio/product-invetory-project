import { Category } from "src/category/entities/category.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    description : string;

    @Column()
    price : number;

    @OneToMany(type=> Category, category => category.product)
    categories : Category[] ;
}
