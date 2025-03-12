import { Injectable } from '@nestjs/common';
import { CreateProductItemDto } from './dto/create-product-item.dto';
import { UpdateProductItemDto } from './dto/update-product-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductItem } from './entities/product-item.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class ProductItemService {

  constructor(
    @InjectRepository(ProductItem) private reporsitory : Repository<ProductItem>
  ){}

  create(createProductItemDto: CreateProductItemDto) {
    return this.create(createProductItemDto);
  }

  createAll(createProductItemDtos: CreateProductItemDto[]) {
    return this.createAll(createProductItemDtos)
  }

  findAll() {
    return `This action returns all productItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productItem`;
  }

  update(id: number, updateProductItemDto: UpdateProductItemDto) {
    return `This action updates a #${id} productItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} productItem`;
  }
}
