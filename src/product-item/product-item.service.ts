import { Injectable } from '@nestjs/common';
import { CreateProductItemDto } from './dto/create-product-item.dto';
import { UpdateProductItemDto } from './dto/update-product-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductItem } from './entities/product-item.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ProductsService } from 'src/products/products.service';
import { In } from 'typeorm/find-options/operator/In';
import { ILike } from 'typeorm';

@Injectable()
export class ProductItemService {

  constructor(
    @InjectRepository(ProductItem) private reporsitory: Repository<ProductItem>,
    private readonly productService: ProductsService
  ) { }

  async create(createProductItemDto: CreateProductItemDto) {

    const product = await this.productService.findOne(createProductItemDto.product.id);

    if (!product) {
      throw new Error('Product not found');
    }
    createProductItemDto.product = product;

    return this.reporsitory.create(createProductItemDto);
  }

  async createAll(createProductItemDtos: CreateProductItemDto[]) {
    return await this.reporsitory.save(createProductItemDtos)
  }

  async findAll() {
    return await this.reporsitory.find();
  }

  findOne(id: number) {
    return this.reporsitory.findOne({ where: { id } });
  }

  async findAllByProductName(productName: string) : Promise<ProductItem[]>{

    // const products = await this.productService.findAllByName(productName);
    
    // if (!products || products.length === 0) {
    //   throw new Error(`No products found with name "${productName}"`);
    // }

    // const productIds = products.map((product) => product.id).filter((id) => !isNaN(id));

    // if (productIds.length === 0) {
    //   throw new Error(`No valid product IDs found for name "${productName}"`);
    // }

    // // Busca todos os itens de produto associados aos produtos encontrados
    // const productItems = await this.reporsitory.find({
    //   where: { product: { id: In(products.map((product) => product.id)) } },
    //   relations: ['product'], // Inclui a relação com o produto
    // });

    const productItems: ProductItem[] = await this.reporsitory.find({
      where: {
        product: {
          name: ILike(`%${productName}%`), // Usa ILike para busca case-insensitive 
        }
      },
      relations: ['product','amountItemProduct'], // Inclui a relação com o produto
    });

    return productItems;
  }

  update(id: number, updateProductItemDto: UpdateProductItemDto) {
    return `This action updates a #${id} productItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} productItem`;
  }
}
