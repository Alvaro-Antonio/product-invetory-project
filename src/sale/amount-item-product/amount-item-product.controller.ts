import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmountItemProductService } from './amount-item-product.service';
import { CreateAmountItemProductDto } from './dto/create-amount-item-product.dto';
import { UpdateAmountItemProductDto } from './dto/update-amount-item-product.dto';

@Controller('amount-item-product')
export class AmountItemProductController {
  constructor(private readonly amountItemProductService: AmountItemProductService) {}

  @Post()
  create(@Body() createAmountItemProductDto: CreateAmountItemProductDto) {
    return this.amountItemProductService.create(createAmountItemProductDto);
  }

  @Get()
  findAll() {
    return this.amountItemProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amountItemProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmountItemProductDto: UpdateAmountItemProductDto) {
    return this.amountItemProductService.update(+id, updateAmountItemProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amountItemProductService.remove(+id);
  }
}
