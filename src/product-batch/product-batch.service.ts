import { Injectable } from '@nestjs/common';
import { CreateProductBatchDto } from './dto/create-product-batch.dto';
import { UpdateProductBatchDto } from './dto/update-product-batch.dto';

@Injectable()
export class ProductBatchService {
  create(createProductBatchDto: CreateProductBatchDto) {
    return 'This action adds a new productBatch';
  }

  findAll() {
    return `This action returns all productBatch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productBatch`;
  }

  update(id: number, updateProductBatchDto: UpdateProductBatchDto) {
    return `This action updates a #${id} productBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} productBatch`;
  }
}
