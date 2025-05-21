import { Category } from "src/category/entities/category.entity";
import { IsString, IsNotEmpty, IsNumber, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GetCategoryDto } from "src/category/dto/get-category.dto";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    price: number;

    image : string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GetCategoryDto)
    categories: GetCategoryDto[];
}
