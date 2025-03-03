import { Category } from "src/category/entities/category.entity";
import { ProductItem } from "src/product-item/entities/product-item.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    description : string;

    @ManyToMany(type => Category, category => category.product, { eager: true })
    @JoinTable()
    categories : Category[] ;

    @OneToMany(() => ProductItem, productItem => productItem.product)  
    productItems: ProductItem[];
}
