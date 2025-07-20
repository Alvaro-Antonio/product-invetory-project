import { Module } from '@nestjs/common';
import { ItemSaleService } from './item-sale.service';
import { ItemSaleController } from './item-sale.controller';
import { ItemSale } from './entities/item-sale.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([ItemSale])],
  controllers: [ItemSaleController],
  providers: [ItemSaleService],
  exports: [ItemSaleService, TypeOrmModule.forFeature([ItemSale])],
})
export class ItemSaleModule {}
