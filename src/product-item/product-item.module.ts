import { Module } from '@nestjs/common';
import { ProductItemService } from './product-item.service';
import { ProductItemController } from './product-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ProductItem } from './entities/product-item.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductItem]),ProductsModule], 
  controllers: [ProductItemController],
  providers: [ProductItemService],
  exports: [ProductItemService]
})
export class ProductItemModule {}
