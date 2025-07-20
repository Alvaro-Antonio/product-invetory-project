import { Test, TestingModule } from '@nestjs/testing';
import { AmountItemProductController } from './amount-item-product.controller';
import { AmountItemProductService } from './amount-item-product.service';

describe('AmountItemProductController', () => {
  let controller: AmountItemProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmountItemProductController],
      providers: [AmountItemProductService],
    }).compile();

    controller = module.get<AmountItemProductController>(AmountItemProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
