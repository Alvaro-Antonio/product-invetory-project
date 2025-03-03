import { Module } from '@nestjs/common';
import { ProductBatchService } from './product-batch.service';
import { ProductBatchController } from './product-batch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBatch } from './entities/product-batch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductBatch])],
  controllers: [ProductBatchController],
  providers: [ProductBatchService],
})
export class ProductBatchModule {}
