import { Test, TestingModule } from '@nestjs/testing';
import { ItemSaleService } from './item-sale.service';

describe('ItemSaleService', () => {
  let service: ItemSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemSaleService],
    }).compile();

    service = module.get<ItemSaleService>(ItemSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
