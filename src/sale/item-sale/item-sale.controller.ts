import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemSaleService } from './item-sale.service';
import { CreateItemSaleDto } from './dto/create-item-sale.dto';
import { UpdateItemSaleDto } from './dto/update-item-sale.dto';

@Controller('item-sale')
export class ItemSaleController {
  constructor(private readonly itemSaleService: ItemSaleService) {}

  @Post()
  create(@Body() createItemSaleDto: CreateItemSaleDto) {
    return this.itemSaleService.create(createItemSaleDto);
  }

  @Get()
  findAll() {
    return this.itemSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemSaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemSaleDto: UpdateItemSaleDto) {
    return this.itemSaleService.update(+id, updateItemSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemSaleService.remove(+id);
  }
}
