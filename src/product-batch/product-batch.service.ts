
import { Repository } from 'typeorm';
import { CreateProductBatchDto } from './dto/create-product-batch.dto';
import { UpdateProductBatchDto } from './dto/update-product-batch.dto';
import { ProductBatch } from './entities/product-batch.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ProductItemService } from 'src/product-item/product-item.service';
import { ProductItem } from 'src/product-item/entities/product-item.entity';
import { CreateProductItemDto } from 'src/product-item/dto/create-product-item.dto';
import { Balance } from 'src/finance/balance/entities/balance.entity';
import { BalanceService } from 'src/finance/balance/balance.service';
import { ObjectNotFoundException } from 'src/exceptions/objectNotFound.exception';


@Injectable()
export class ProductBatchService {

constructor(
  @InjectRepository(ProductBatch) private batchRepository : Repository<ProductBatch>,
  private readonly productItemService : ProductItemService,
  private readonly balanceService : BalanceService,
){}

  
  async create(createProductBatchDto: CreateProductBatchDto) {
    
    createProductBatchDto.dateOrder = new Date();
    let valueTotal : number = 0.0;

    console.log(createProductBatchDto);
    
    for (const productItem of createProductBatchDto.productItens) {     
      valueTotal += productItem.purchasePrice;
    }

  
    createProductBatchDto.valueTotal = valueTotal;
    let productbatch : ProductBatch = await this.batchRepository.save(createProductBatchDto);

    for (const productItem of createProductBatchDto.productItens) {     
      productItem.productBatch = productbatch;
    }
    await this.productItemService.createAll(createProductBatchDto.productItens);

    const balance: Balance | null = await this.balanceService.findByYear(new Date().getFullYear());
    if (!balance) {
      throw new ObjectNotFoundException('Balance not found for the current year');
    }

    balance.totalInvested += valueTotal;
    await this.balanceService.update(balance.id, balance);


    return null;

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

