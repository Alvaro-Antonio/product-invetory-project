import { Injectable } from '@nestjs/common';
import { CreateItemSaleDto } from './dto/create-item-sale.dto';
import { UpdateItemSaleDto } from './dto/update-item-sale.dto';

@Injectable()
export class ItemSaleService {
  create(createItemSaleDto: CreateItemSaleDto) {
    return 'This action adds a new itemSale';
  }

  findAll() {
    return `This action returns all itemSale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemSale`;
  }

  update(id: number, updateItemSaleDto: UpdateItemSaleDto) {
    return `This action updates a #${id} itemSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemSale`;
  }
}
