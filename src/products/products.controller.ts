import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ObjectNotFoundException } from 'src/exceptions/objectNotFound.exception';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    const product = await this.productsService.findAll();
    if (!product) {
      return new ObjectNotFoundException('Produto');
    }
    return this.productsService.findAll();
  }

  @Get("search")
  async findAllByName(@Query('name') name: string) {
    const products: Product[] = await this.productsService.findAllByName(name);
    if (!products || products.length === 0) {
      throw new ObjectNotFoundException('Produto');
    }
    return products;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
