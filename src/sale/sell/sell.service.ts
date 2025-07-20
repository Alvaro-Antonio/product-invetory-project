import { Injectable } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sell } from './entities/sell.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ItemSale } from '../item-sale/entities/item-sale.entity';
import { Balance } from 'src/finance/balance/entities/balance.entity';
import { AmountItemProduct } from '../amount-item-product/entities/amount-item-product.entity';

@Injectable()
export class SellService {

  constructor(
    @InjectRepository(Sell) private readonly sellRepository: Repository<Sell>,
    @InjectRepository(ItemSale) private readonly itemSaleRepository: Repository<ItemSale>,
    @InjectRepository(Balance) private readonly balance: Repository<Balance>,
    @InjectRepository(AmountItemProduct) private readonly amountItemRepo: Repository<AmountItemProduct>,

  ) {}

  async create(createSellDto: CreateSellDto): Promise<Sell> {

    let totalValue: number = 0.0;

    createSellDto.items.forEach((item) => {
      totalValue += item.totalPrice;
    });

    // Cria a venda
    const sell = this.sellRepository.create({
      date: createSellDto.date,
      total: totalValue,
      paymentMethod: createSellDto.paymentMethod,
      customer: createSellDto.customer,
    });

    await this.sellRepository.save(sell);

    // Cria os itens da venda
    const itemsSale = createSellDto.items.map((item) =>
      this.itemSaleRepository.create({
        productItem: item.productItem,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice,
        discount: item.discount,
        sell: sell, // Relaciona os itens à venda
      }
    ),
    );

    //atualizar quantidade do produto
    createSellDto.items.map(async (item) => {
      const productItem = item.productItem;
      let amountItemProduct : AmountItemProduct | null = await this.amountItemRepo.findOne({
        where: { id: productItem.amountItemProduct.id },
      });
      
      if (amountItemProduct) {
        amountItemProduct.amountFinal -= item.quantity; // Atualiza a quantidade final do produto
      
        await this.amountItemRepo.save(amountItemProduct); // Salva a atualização do produto
      } else {
        console.warn(`Produto com ID ${productItem.amountItemProduct.id} não encontrado.`);
      }
    });

   
    // Salva os itens da venda no banco de dados
    await this.itemSaleRepository.save(itemsSale);

    // Relaciona os itens à venda
    sell.items = itemsSale;

    const balance: Balance | null  = await this.balance.findOne({
      where: {
        year: new Date().getFullYear(),
      },
    });

    if (balance) {
      
      balance.totalSpent += totalValue;
      balance.profit = balance.totalSpent - balance.totalInvested ; // Atualiza o lucro total
      await this.balance.save(balance);

    } else {
      // Lidar com o caso em que balance é null
      // Por exemplo, criar um novo registro ou lançar um erro
      console.warn("Nenhum registro de balanço encontrado para o ano atual.");
    }

    return sell;
  }

  findAll() {
    return `This action returns all sell`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sell`;
  }

  update(id: number, updateSellDto: UpdateSellDto) {
    return `This action updates a #${id} sell`;
  }

  remove(id: number) {
    return `This action removes a #${id} sell`;
  }
}
