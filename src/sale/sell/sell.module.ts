import { Module } from '@nestjs/common';
import { SellService } from './sell.service';
import { SellController } from './sell.controller';
import { Sell } from './entities/sell.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ItemSaleModule } from '../item-sale/item-sale.module';
import { BalanceModule } from 'src/finance/balance/balance.module';
import { AmountItemProductModule } from '../amount-item-product/amount-item-product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sell]), ItemSaleModule, BalanceModule, AmountItemProductModule],
  controllers: [SellController],
  providers: [SellService],
})
export class SellModule {}
