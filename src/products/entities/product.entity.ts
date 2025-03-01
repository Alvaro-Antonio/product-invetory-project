import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToMany(type => Category, category => category.product, { eager: true })
    @JoinTable()
    categories : Category[] ;
}
