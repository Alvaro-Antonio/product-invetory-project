import { IsNotEmpty } from "class-validator";
import { ProductBatch } from "src/product-batch/entities/product-batch.entity";
import { Product } from "src/products/entities/product.entity";
import { AmountItemProduct } from "src/sale/amount-item-product/entities/amount-item-product.entity";
import { ItemSale } from "src/sale/item-sale/entities/item-sale.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductItem {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    @IsNotEmpty()
    amount : number;

    @Column()
    purchasePrice : number;

    @Column()
    sellingPrice : number;

    @IsNotEmpty()
    @ManyToOne(() => Product, product => product.productItems, { eager: true })
    product : Product;

    @ManyToOne(() => ProductBatch, productBatch => productBatch.productItens)
    productBatch: ProductBatch;

    @ManyToOne(() => AmountItemProduct, sell => sell.productItem, { eager: true })
    amountItemProduct: AmountItemProduct;

    @OneToMany(() => ItemSale, itemSale => itemSale.productItem)
    itemSale: ItemSale[];

}
