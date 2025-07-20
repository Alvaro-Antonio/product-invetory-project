import { forwardRef, Module } from '@nestjs/common';
import { ProductBatchService } from './product-batch.service';
import { ProductBatchController } from './product-batch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBatch } from './entities/product-batch.entity';
import { ProductItemModule } from 'src/product-item/product-item.module';
import { BalanceModule } from 'src/finance/balance/balance.module';
import { AmountItemProductModule } from 'src/sale/amount-item-product/amount-item-product.module';


@Module({
  imports: [TypeOrmModule.forFeature([ProductBatch]), ProductItemModule, BalanceModule, AmountItemProductModule],
  controllers: [ProductBatchController],
  providers: [ProductBatchService],
})
export class ProductBatchModule {}
