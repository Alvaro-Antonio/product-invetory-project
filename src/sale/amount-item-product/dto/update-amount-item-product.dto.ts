import { PartialType } from '@nestjs/swagger';
import { CreateAmountItemProductDto } from './create-amount-item-product.dto';

export class UpdateAmountItemProductDto extends PartialType(CreateAmountItemProductDto) {}
