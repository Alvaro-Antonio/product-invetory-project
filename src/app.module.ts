import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { DataBaseModule } from './configs/database.module';
import { ProductItemModule } from './product-item/product-item.module';
import { ProductBatchModule } from './product-batch/product-batch.module';
import { BalanceModule } from './finance/balance/balance.module';
import { ImageServiceService } from './utils/image-service/image.service';

@Module({
  imports: [
    ProductsModule,
    CategoryModule, 
    DataBaseModule, 
    ProductItemModule, 
    ProductBatchModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService, ImageServiceService],
})
export class AppModule {}
