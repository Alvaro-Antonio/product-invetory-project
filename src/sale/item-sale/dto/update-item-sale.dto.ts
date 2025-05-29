import { PartialType } from '@nestjs/swagger';
import { CreateItemSaleDto } from './create-item-sale.dto';

export class UpdateItemSaleDto extends PartialType(CreateItemSaleDto) {}
