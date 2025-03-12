
import { Repository } from 'typeorm';
import { CreateProductBatchDto } from './dto/create-product-batch.dto';
import { UpdateProductBatchDto } from './dto/update-product-batch.dto';
import { ProductBatch } from './entities/product-batch.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ProductItemService } from 'src/product-item/product-item.service';
import { ProductItem } from 'src/product-item/entities/product-item.entity';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';


@Injectable()
export class ProductBatchService {

constructor(
  @InjectRepository(ProductBatch) private batchRepository : Repository<ProductBatch>,
  @Inject(ProductItemService)
  private readonly productItemService : ProductItemService
){}

  create(createProductBatchDto: CreateProductBatchDto) {
    const productItems : ProductItem [] = this.productItemService.createAll(createProductBatchDto.productItem);

    createProductBatchDto.productItem = productItems;

    return this.batchRepository.create(createProductBatchDto);

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

