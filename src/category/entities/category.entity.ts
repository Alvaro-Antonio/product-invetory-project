import { IsNotEmpty } from "class-validator";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    @IsNotEmpty()
    name : string;

    @Column()
    @IsNotEmpty()
    description : string;

    @ManyToMany(()=> Product, product => product.categories)
    product: Product;
}
