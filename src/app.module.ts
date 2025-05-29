import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { DataBaseModule } from './configs/database.module';
import { ProductItemModule } from './product-item/product-item.module';
import { ProductBatchModule } from './product-batch/product-batch.module';
import { BalanceModule } from './finance/balance/balance.module';
import { ItemSaleModule } from './sale/item-sale/item-sale.module';
import { SellModule } from './sale/sell/sell.module';
import { CustomerModule } from './customer/customer.module';
import { PersonModule } from './person/person.module';
import { AmountItemProductModule } from './sale/amount-item-product/amount-item-product.module';

@Module({
  imports: [
    ProductsModule,
    CategoryModule, 
    DataBaseModule, 
    ProductItemModule, 
    ProductBatchModule,
    BalanceModule, 
    ItemSaleModule,
    SellModule,
    CustomerModule,
    PersonModule,
    AmountItemProductModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
