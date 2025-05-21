import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ObjectNotFoundException } from 'src/exceptions/objectNotFound.exception';
import { Product } from './entities/product.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { console } from 'inspector';

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: 'src/configs/database/images/',
      filename: (_req, file, cb) => {
        const ext = extname(file.originalname);
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
        console.log("Generated filename:", filename);
        cb(null, filename);
      },
    }),
  }))
 async create(@UploadedFile() image: Express.Multer.File, @Body() productRaw: any): Promise<CreateProductDto & Product> {
      const productDto: CreateProductDto = productRaw;
      
      console.log("Image filename:", image?.filename || "No file uploaded");
      return this.productsService.create(productDto, image.filename);
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
