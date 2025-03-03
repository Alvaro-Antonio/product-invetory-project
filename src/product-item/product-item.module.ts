import { Module } from '@nestjs/common';
import { ProductItemService } from './product-item.service';
import { ProductItemController } from './product-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ProductItem } from './entities/product-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductItem])], 
  controllers: [ProductItemController],
  providers: [ProductItemService],
})
export class ProductItemModule {}
