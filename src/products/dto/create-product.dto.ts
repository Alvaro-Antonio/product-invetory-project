import { Category } from "src/category/entities/category.entity";
import { IsString, IsNotEmpty, IsNumber, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GetCategoryDto } from "src/category/dto/get-category.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Laptop'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'laptop para uso diário'})
    description: string;

    @IsNumber()
    @ApiProperty({example: 2689})
    price: number;

    image : string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GetCategoryDto)
    @ApiProperty({
    type: [GetCategoryDto],
    description: 'List of categories associated with the product',
    example: [
            {
                id: 1,
                name: 'Electronics',
                description: 'Devices and gadgets'
            }
        ]
    })
    categories: GetCategoryDto[];
}
