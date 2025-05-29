import { Module } from '@nestjs/common';
import { AmountItemProductService } from './amount-item-product.service';
import { AmountItemProductController } from './amount-item-product.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmountItemProduct } from './entities/amount-item-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AmountItemProduct])],
  controllers: [AmountItemProductController],
  providers: [AmountItemProductService],
})
export class AmountItemProductModule {}
