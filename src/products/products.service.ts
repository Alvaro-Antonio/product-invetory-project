import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ILike } from 'typeorm/find-options/operator/ILike';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    ) {}

  create(createProductDto: CreateProductDto, imageFilename: string) {
    createProductDto.image = `${imageFilename}`;

    return this.productRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({where: {id}});
  }

  async findAllByName(name: string) : Promise<Product[]> {
    console.log(name);
    return  await this.productRepository.findBy({ name: ILike(`%${name}%`) });
  } 

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
