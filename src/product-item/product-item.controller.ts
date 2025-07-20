import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { ProductItemService } from './product-item.service';
import { CreateProductItemDto } from './dto/create-product-item.dto';
import { UpdateProductItemDto } from './dto/update-product-item.dto';
import { ProductItem } from './entities/product-item.entity';
import { ObjectNotFoundException } from 'src/exceptions/objectNotFound.exception';

@Controller('product-item')
export class ProductItemController {
  
  constructor(
    private readonly productItemService: ProductItemService,
  ) {}

  @Post()
  create(@Body() createProductItemDto: CreateProductItemDto) {
    return this.productItemService.create(createProductItemDto);
  }

  @Get('search')
  async findAllItemsByName(@Query('name') name: string): Promise<ProductItem[]> {

    if (typeof name !== 'string' || name.trim() === '') {
      throw new BadRequestException('O parâmetro productName deve ser uma string não vazia.');
    }

    const products: ProductItem[] = await this.productItemService.findAllByProductName(name);
    
    if (!products || products.length === 0) {
      throw new ObjectNotFoundException('ProdutoItem');
    }

    return products;
  }

  @Get()
  findAll() {
    return this.productItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productItemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductItemDto: UpdateProductItemDto) {
    return this.productItemService.update(+id, updateProductItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productItemService.remove(id);
  }
}
