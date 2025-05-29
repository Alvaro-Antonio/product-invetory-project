import { Injectable } from '@nestjs/common';
import { CreateAmountItemProductDto } from './dto/create-amount-item-product.dto';
import { UpdateAmountItemProductDto } from './dto/update-amount-item-product.dto';

@Injectable()
export class AmountItemProductService {
  create(createAmountItemProductDto: CreateAmountItemProductDto) {
    return 'This action adds a new amountItemProduct';
  }

  findAll() {
    return `This action returns all amountItemProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amountItemProduct`;
  }

  update(id: number, updateAmountItemProductDto: UpdateAmountItemProductDto) {
    return `This action updates a #${id} amountItemProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} amountItemProduct`;
  }
}
