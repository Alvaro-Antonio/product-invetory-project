import { Injectable } from '@nestjs/common';
import { CreateAmountItemProductDto } from './dto/create-amount-item-product.dto';
import { UpdateAmountItemProductDto } from './dto/update-amount-item-product.dto';
import { AmountItemProduct } from './entities/amount-item-product.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class AmountItemProductService {

  constructor(
   @InjectRepository(AmountItemProduct)
       private productRepository: Repository<AmountItemProduct>,
  ) {}

  async create(createAmountItemProductDto: CreateAmountItemProductDto) {
    return await this.productRepository.save(createAmountItemProductDto);
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
