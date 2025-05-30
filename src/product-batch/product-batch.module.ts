import { forwardRef, Module } from '@nestjs/common';
import { ProductBatchService } from './product-batch.service';
import { ProductBatchController } from './product-batch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBatch } from './entities/product-batch.entity';
import { ProductItemService } from 'src/product-item/product-item.service';
import { ProductItemModule } from 'src/product-item/product-item.module';
import { BalanceModule } from 'src/finance/balance/balance.module';


@Module({
  imports: [TypeOrmModule.forFeature([ProductBatch]), ProductItemModule, BalanceModule],
  controllers: [ProductBatchController],
  providers: [ProductBatchService],
})
export class ProductBatchModule {}
