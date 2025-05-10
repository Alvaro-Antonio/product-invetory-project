import { Injectable } from '@nestjs/common';
import { CreateProductItemDto } from './dto/create-product-item.dto';
import { UpdateProductItemDto } from './dto/update-product-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductItem } from './entities/product-item.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class ProductItemService {

  constructor(
    @InjectRepository(ProductItem) private reporsitory : Repository<ProductItem>,
    private readonly productService: ProductsService
  ){}

  async create(createProductItemDto: CreateProductItemDto) {

    const product = await this.productService.findOne(createProductItemDto.product.id);

    if (!product) {
      throw new Error('Product not found');
    }
    createProductItemDto.product = product;

    return this.reporsitory.create(createProductItemDto);
  }

  async createAll(createProductItemDtos: CreateProductItemDto[]) {
    return  await this.reporsitory.save(createProductItemDtos)
  }

  async findAll() {
    return await this.reporsitory.find();
  }

  findOne(id: number) {
    return this.reporsitory.findOne({where: {id}});
  }

  update(id: number, updateProductItemDto: UpdateProductItemDto) {
    return `This action updates a #${id} productItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} productItem`;
  }
}
