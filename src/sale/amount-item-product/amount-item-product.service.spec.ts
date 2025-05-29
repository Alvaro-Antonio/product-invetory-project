import { Test, TestingModule } from '@nestjs/testing';
import { AmountItemProductService } from './amount-item-product.service';

describe('AmountItemProductService', () => {
  let service: AmountItemProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmountItemProductService],
    }).compile();

    service = module.get<AmountItemProductService>(AmountItemProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
