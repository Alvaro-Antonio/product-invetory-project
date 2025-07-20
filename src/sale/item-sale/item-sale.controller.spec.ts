import { Test, TestingModule } from '@nestjs/testing';
import { ItemSaleController } from './item-sale.controller';
import { ItemSaleService } from './item-sale.service';

describe('ItemSaleController', () => {
  let controller: ItemSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemSaleController],
      providers: [ItemSaleService],
    }).compile();

    controller = module.get<ItemSaleController>(ItemSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
